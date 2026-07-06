---
layout: skullmaster.njk
title: Skullmaster
description: Skullmaster is a CLI tool that generates customizable skeleton loaders for UI components from the browser.
---

# Skullmaster

Skullmaster is a CLI tool that lets you generate customizable skeleton loaders for your UI components directly from the browser. Instead of manually creating placeholder components, Skullmaster analyzes the rendered component and generates a matching skeleton that you can customize further.

## Installation

Install Skullmaster as a development dependency:

```bash
npm install skullmaster --save-dev
```

## Starting the Development Server

Start the Skullmaster development server:

```bash
npm skullmaster serve
```

On the first run, Skullmaster will guide you through an initial configuration.

You will be asked for:

- **Output directory** (default: `src/skeletons`)
- **Project type**
  - `react`
  - `react-ts`

After the configuration is complete, the following file will be created:

```text
<outDir>/skeletons/DefaultBone.tsx
```

`DefaultBone.tsx` is the fallback skeleton shown whenever a generated skeleton does not exist. Feel free to customize it to match your application's loading experience.

Once configured, the Skullmaster development server will start on:

```text
http://localhost:8008
```

---

## Mark Components for Skeleton Generation

To generate a skeleton, simply mark any component with the `data-skullmaster` attribute.

```tsx
<div data-skullmaster="ProfileCard">
  ...
</div>
```

The value of the attribute becomes the skeleton name.

You can render it anywhere in your application using the generated registry:

```tsx
<Skeleton name="ProfileCard" />
```

The `Skeleton` component is exported from:

```text
<outDir>/registry.tsx
```

At this point, `ProfileCard` has not been generated yet, so the `Skeleton` component will render the `DefaultBone`.

The next step is generating the actual skeleton.

---

## Generating Skeletons

Skeletons can be generated in two ways:

1. Using the [framework-specific runtime package](#react)
2. Using the Skullmaster Browser Extension *(Work in Progress)*

## React

Install the React integration:

```bash
npm install @skullmaster/react
```

This package is a lightweight runtime that sends component information from your React application to the running Skullmaster development server.

### Add the Provider

In your application entry point (`App.tsx`, `main.tsx`, or `layout.tsx`), add the `Skullmaster` component.

```tsx
import { Skullmaster } from "@skullmaster/react";

<Skullmaster isEnabled={process.env.NODE_ENV === "development"} />
```

### Import the Styles

Import the default styles once in your root entry file.

```tsx
import "@skullmaster/react/styles.css";
```

---

## Generate Your First Skeleton

Start both:

- the Skullmaster development server
- your React development server

When the application loads, you will see a small skull icon in the corner.

1. Enable Skullmaster.
2. Hover over a component marked with `data-skullmaster`.
3. The component will be highlighted.
4. Click the download button.

Skullmaster will analyze the rendered component and generate its skeleton automatically.

The generated file will be saved to:

```text
<outDir>/skeletons
```

For example:

```text
src/skeletons/ProfileCard.tsx
```

Now, rendering

```tsx
<Skeleton name="ProfileCard" />
```

will display the generated skeleton instead of the fallback `DefaultBone`.

---

## That's It

Once your skeleton has been generated, it becomes part of your project's skeleton registry and can be used anywhere in your application through the `Skeleton` component.

Repeat the same process for any component you want to support, and Skullmaster will build a library of reusable, customizable skeleton loaders for your UI.
