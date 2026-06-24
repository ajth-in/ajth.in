---
layout: layout.njk
title: Blog
---

## 📝 Blog

{% for post in collections.blog %}
### [{{ post.data.title }}]({{ post.url }})

_{{ post.data.publishedAt }}_

{{ post.data.summary }}

---
{% endfor %}
