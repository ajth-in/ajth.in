---
layout: skullmaster.njk
title: Skullmaster
description: Skullmaster is a CLI tool that generates customizable skeleton loaders for UI components from the browser.
remoteSource: https://github.com/ajth-in/skullmaster/blob/master/README.md
---

# Skullmaster

Skullmaster is a CLI tool that lets you generate customizable skeleton loaders for your UI components directly from the browser. Instead of manually creating placeholder components, Skullmaster analyzes the rendered component and generates a matching skeleton that you can customize further.

## Getting started

Choose the guide for your framework to install Skullmaster, configure the development server, and generate your first skeleton component.

- ⚛️ **[React](/skullmaster/react)**
  Learn how to install Skullmaster in a React project, start the development server, and generate customizable skeleton components.

- 🔶 **[Svelte](/skullmaster/svelte)**
  Set up Skullmaster in a Svelte project and generate framework-native skeleton components from your application's rendered UI.

## How it works

Generating an accurate skeleton requires runtime information that only exists after your application has been rendered by the browser. This includes the final HTML structure, computed styles, image dimensions, text layout, and other rendering details.

Skullmaster solves this by running a small development helper inside your application. During development, this helper collects the runtime information required to recreate your UI as a skeleton and sends it to the Skullmaster CLI, which runs locally (by default on port **8080**).

The CLI receives this payload and generates skeleton components for your chosen framework.

### Generated output

Unlike approaches that reconstruct your component from scratch, Skullmaster preserves the original DOM structure as much as possible. The generated skeleton closely resembles the original markup, making it easier to maintain, customize, and understand.

For example, unlike libraries such as [0xGF/boneyard](https://github.com/0xGF/boneyard), Skullmaster does **not** flatten your UI into a collection of generic `<div>` elements. Semantic elements such as `<article>`, `<section>`, `<header>`, `<nav>`, `<button>`, and `<img>` are preserved whenever possible.

Interactive elements are transformed so they remain visually accurate while behaving like non-interactive placeholders.

### During generation, Skullmaster performs the following transformations:

- Replaces all text content with placeholder characters of approximately the same visual length.
- Replaces images with placeholder SVGs that preserve the original aspect ratio and natural dimensions.
- Removes all interactive behavior from controls such as buttons, links, inputs, and other focusable elements.
- Hides the generated skeleton from the accessibility tree so assistive technologies do not announce placeholder content.
- Applies skeleton styling and shimmer animations while preserving the original layout.

## Why preserve the DOM?

Keeping the generated markup close to the original component has several advantages:

- Easier to understand and customize generated skeletons.
- Better layout fidelity with fewer unexpected shifts.
- Semantic HTML is retained instead of being replaced with generic containers.
- Updates to the original component are easier to regenerate and compare.

## Accessibility

Generated skeletons are intended to be visual placeholders only.

To avoid confusing screen reader users, Skullmaster automatically removes interactive behavior and marks placeholder content as inaccessible. The generated skeleton should never be interpreted as meaningful page content.

## Caveats

- If the HTML generated in development differs from the HTML rendered in production, the generated skeleton may not accurately match the production UI.
- Components that depend on user-specific data, feature flags, or server-side rendering differences may require regeneration.
- Dynamic content loaded after the snapshot is taken will not be reflected unless a new skeleton is generated.
- The generated skeleton preserves your component structure for maintainability, not because it represents semantically correct skeleton markup. The output is intended as a starting point that you can further customize if needed.

## When should I regenerate skeletons?

You should regenerate skeletons whenever:

- The layout of a component changes.
- Images or aspect ratios change.
- Typography or spacing changes significantly.
- New loading states are introduced.
- You upgrade your design system in a way that affects component structure.
