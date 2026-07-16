---
layout: blog.njk
tags: blog
title: "Confidently Wrong"
publishedAt: "2026-04-29"
summary: "LLMs are the most efficient lossy compression algorithm ever written. When information is missing, the model is incentivized to guess. Intrinsic vs extrinsic hallucinations, and why feedback loops matter. A talk from GitHub Copilot Dev Days 2026."
---

# Generating UI Skeletons

## Skeletons, Shimmer, and Loading Screens

A UI skeleton, sometimes called a skeleton screen or shimmer loader, is a simplified placeholder that mimics the layout of a page while the actual content is loading. Instead of showing a blank screen or a spinning loader, it displays gray blocks where text, images, buttons, and other elements will eventually appear.

The idea has been around for years, but it remains one of the most effective ways to improve the perceived loading experience. By giving users a preview of the page structure, skeleton screens make interfaces feel faster and reduce the uncertainty of waiting for content to load.

This is a journal of my attempt to build a library that can automatically generate UI skeletons from existing interfaces. It documents the ideas that worked, the ones that didn't, and the tradeoffs I encountered along the way.

The motivation came from a common problem in frontend development. Skeleton components are surprisingly tedious to maintain. They need to closely match the layout of the actual UI, which means every change to a component often requires updating its corresponding skeleton as well. As applications grow, keeping these two versions in sync becomes repetitive and error-prone.

One could argue that many of these maintenance issues can be solved by sharing the same base class names between the actual component and its skeleton.

Consider a simple profile card.
<div style="overflow-x:auto;overflow-y:hidden; margin-bottom: 20px; text-align: center">
<pre style="background:none;border:none;padding:0;margin:0;font-size:clamp(18px,1.5vw,8px);line-height:1;text-align:left;display:inline-block;white-space:pre;color:#e6c200">
┌───────────────────────────────────────┐
│   _____                               |
|  /     \    Ajith Kumar P means       |
| | () () |                             |
|  \  ^  /          SDE 3               |
|   |||||                               |
|   |||||                               |
|                                       |
│                                       │
│  Building accessible frontend         │
│  systems and design libraries.        │
│                                       │
│  ┌──────────┐      ┌──────────┐       │
│  │ Follow   │      │ Message  │       │
│  └──────────┘      └──────────┘       │
└───────────────────────────────────────┘

</pre>
</div>
The corresponding markup might look like this:

```html
<article class="profile-card">
  <header class="profile-card__header">
    <img class="profile-card__avatar" />

    <div class="profile-card__info">
      <h2 class="profile-card__title">Jane Doe</h2>
      <p class="profile-card__subtitle">Product Engineer</p>
    </div>
  </header>

  <p class="profile-card__description">
    Building accessible frontend systems and design libraries.
  </p>

  <footer class="profile-card__actions">
    <button class="profile-card__button">Follow</button>

    <button class="profile-card__button">Message</button>
  </footer>
</article>
```

A skeleton can reuse the same base classes while replacing the content with placeholders.

```html
<article class="profile-card skeleton">
  <header class="profile-card__header">
    <div class="profile-card__avatar skeleton__circle"></div>

    <div class="profile-card__info">
      <div class="profile-card__title skeleton__line"></div>
      <div class="profile-card__subtitle skeleton__line short"></div>
    </div>
  </header>

  <div class="profile-card__description">
    <div class="skeleton__line"></div>
    <div class="skeleton__line short"></div>
  </div>

  <footer class="profile-card__actions">
    <div class="profile-card__button skeleton__button"></div>
    <div class="profile-card__button skeleton__button"></div>
  </footer>
</article>
```

The advantage of this approach is that both the real component and the skeleton share the same layout classes. Any changes to spacing, alignment, or flexbox behavior automatically apply to both.

Unfortunately, it starts to break down once the UI becomes more complex.

Skeletons are almost always built from generic `<div>` elements, regardless of what the original component contains. A `<button>` behaves differently from a `<div>`. An `<input>` has browser-specific styling, intrinsic sizing, borders, focus rings, and other characteristics that a <div> simply doesn't have. Images, checkboxes, selects, textareas, and many other elements have similar quirks.

To make the skeleton visually match the original UI, you gradually introduce more and more skeleton-specific CSS.

At this point, you've effectively created a second styling system. The layout may still be shared, but the visual appearance now requires its own set of rules. As the component evolves, those skeleton-specific styles need to evolve with it, and the maintenance burden gradually returns.
