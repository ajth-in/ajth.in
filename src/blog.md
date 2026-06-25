---
layout: layout.njk
title: Blog
description: Writings about software engineering, LLMs, state machines, and the occasional late-night thought.
---

## 📝 Blog

{% for post in collections.blog %}

### [{{ post.data.title }}]({{ post.url }})

_{{ post.data.publishedAt }}_

{{ post.data.summary }}

## {% endfor %}

---
