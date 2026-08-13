---

layout: blog.njk
tags: blog
title: "Your Skeleton Loader Shouldn’t Be Another Component to Maintain !!"
publishedAt: "2026-08-13"
summary: "Making skeleton loaders is easy enough, but maintaining them alongside the UI they represent is not. SkullMaster is an experimental library that generates customizable skeletons from rendered components, so your source UI can remain the single thing you maintain."
---

# Your Skeleton Loader Shouldn’t Be Another Component to Maintain !!

Making skeleton loaders, while not particularly difficult, is definitely not the most fun part of building a UI.

A good skeleton should reasonably represent the actual UI that is about to render. The problem is that you also need to maintain those skeletons whenever the source UI changes. In practice, this often means maintaining two versions of the same UI: the actual component and its skeleton.

**SkullMaster**, the library I'm about to discuss, is an experimental attempt to solve this problem.

> For more information, examples, and documentation, check out the [SkullMaster repository](https://github.com/ajth-in/skullmaster).

## Design Principles

SkullMaster is built around a few simple ideas:

1. **The source should be the only thing you need to maintain.**

   Skeletons should be generated from the source code rather than maintained separately.

2. **Generated skeletons should still be customizable.**

   You should be able to make adjustments when the automatically generated result isn't exactly what you want, without having to maintain an entirely separate skeleton.

3. **The generated skeleton should represent the rendered UI.**

   What matters is not just the source markup, but what the component actually looks like when rendered.

4. **The generated result should actually be a skeleton.**

   Meaningful content from the source should not leak into the generated skeleton.

With that in mind, the following video shows SkullMaster in action.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/cSXlIWdZYxI"
  title="SkullMaster Demo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>

As you can see, the idea is fairly simple.

You mark a component as **skeleton-generatable** by assigning it a skeleton name using the `markAsSkull` function.

This allows the SkullMaster client to detect the marked component. Assuming you have added the SkullMaster control component to your root component, you can then click on the marked component to generate and save its skeleton.

## How Does This Work?

> **Note:** SkullMaster is currently in beta. When installing it, make sure to use the beta versions: `skullmaster@beta` and `@skullmaster/react@beta`.

The following example uses React. For other frameworks, install the corresponding SkullMaster package and refer to the framework-specific documentation.

First, install `skullmaster` and `@skullmaster/react`.

Then, alongside your development server, run the SkullMaster server:

```bash
skullmaster serve
```

Next, add the `<SkullMaster />` component from `@skullmaster/react` to your root component.

When you click on a marked component, the SkullMaster client collects the runtime information required to generate a skeleton and sends it to the SkullMaster server.

The server then processes this information and generates the skeleton as a React component in your configured skeleton directory.

The important part here is that SkullMaster generates the skeleton from the **rendered result**, rather than simply trying to transform the source code directly.

## What Does SkullMaster Do to the Rendered UI?

One important thing to mention is that SkullMaster attempts to preserve the semantics of the original rendered UI in the generated skeleton.

This can be a deal breaker for some use cases, which is understandable. However, SkullMaster also injects the necessary ARIA attributes and strips meaningful information from the source so that the generated result behaves and communicates like a skeleton rather than the original UI.

Some of the transformations include:

* Replacing text content with skeleton placeholders
* Removing image sources and replacing them with generated placeholders
* Suppressing the interactivity of elements
* Adding style overrides to visually transform elements into skeletons
* Removing or hiding visually insignificant elements, such as `div` wrappers used primarily for layout
* Adding the appropriate accessibility attributes for a loading state

And there is more to it than that.

The goal is not simply to take your existing DOM and make everything gray. The generated skeleton should retain enough of the original structure to resemble the UI that will eventually appear.

## What If I Don't Like the Generated Result?

This is an important problem to solve.

Modern UIs often contain a lot of wrapper elements. Some of them are visually meaningful, while others exist purely for layout, positioning, or semantics.

If we simply copied the entire rendered markup and applied skeleton styles to every element, there is a good chance that these visually insignificant elements would also become visible in the skeleton.

SkullMaster attempts to solve this by measuring the **visual significance** of elements and keeping visually insignificant elements transparent.

Of course, this isn't perfect.

Sometimes you may know that a particular element should be transparent. In other cases, you may want to remove an entire subtree from the generated skeleton.

You could always edit the generated skeleton manually, but that brings us back to the problem we were trying to solve in the first place: having to maintain generated code.

Instead, SkullMaster provides a couple of ways to customize the generated result.

At the top level, you can provide tweaks alongside the skeleton name:

```tsx
markAsSkull("ProductCard", {
  isTransparent: true,
  hideSubTree: true,
});
```

For child elements, you can use `tweakForSkull`:

```tsx
tweakForSkull({
  isTransparent: true,
  hideSubTree: true,
});
```

This allows you to describe how the generated skeleton should behave without directly modifying the generated skeleton itself.

The generated code can therefore be regenerated whenever the source changes while still retaining your customizations.

## What If I Try to Load a Skeleton That Doesn't Exist?

SkullMaster also has a fallback for this case.

If you try to load a skeleton that doesn't exist, SkullMaster will fall back to `DefaultBone.tsx` from your skeleton directory.

Initially, this is just a simple fallback such as:

```tsx
"Loading..."
```

But you can customize `DefaultBone.tsx` however you want.

This is particularly useful during development because a missing skeleton doesn't have to break your application.

## SkullMaster Is Still in Beta

I don't expect to make major changes to the existing APIs, but there are still quite a few assumptions behind the implementation that I'm not completely confident about yet.

The biggest question is whether some of those assumptions hold across a sufficiently wide range of real-world applications.

The project is therefore still experimental, and there are probably cases where the generated skeleton won't be exactly what you expect.

That is also why feedback is particularly useful at this stage.

If you want to try it out, install the beta versions:

```bash
pnpm add -D skullmaster@beta
pnpm add @skullmaster/react@beta
```

You can replace `pnpm` with the package manager of your choice.

For more information, examples, and documentation, check out the [SkullMaster repository](https://github.com/ajth-in/skullmaster).
