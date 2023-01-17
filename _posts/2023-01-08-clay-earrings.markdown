---
layout: post-centered
title: "Clay earrings"
icon: fa-snowflake-o
tags: [craft]
thumbnail: /assets/images/posts/clay-earrings/tools_and_materials.png
image-dir: /assets/images/posts/clay-earrings/
images:
  - id: tools_and_materials
    name: Tools and materials
  - id: cold_pizza
    name: Cold pizza
  - id: flower
    name: Flower
  - id: collections
    name: Others
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
Clay earrings can be baked with home oven. It reminds me of making clay animals with play-doh as a kid.
I was surprised by how vibrant the color remains even after baking.<br>
<br>

{% for image in page.images%}
  <div style="margin-bottom: 30px">
    <img src="{{page.image-dir}}{{image.id}}.png" alt={{image.id}} weight="400" height="400" style="margin: 0 auto" />
    {{image.name}}
  </div>
{% endfor %}
</body>
</html>


