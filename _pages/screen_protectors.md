---
layout: page
title: Screen Protectors
description: I'm weirdly good at putting on screen protectors.
permalink: /screen_protectors
nav: true
nav_order: 5
image-dir: /assets/images/posts/screen-protectors/
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">
      <i class="fa fa-mobile" aria-hidden="true"></i> Screen Protectors
    </h1>
  </header>

  <article class="post-content">
    <p>I'm weirdly good at putting on screen protectors. Teach me something fun and I will happily fix your screen 😀</p>
    
    <div class="row row-cols-1 row-cols-md-2">
      {% for i in (1..2) %}
        {% assign img_path = page.image-dir | append: i | append: '.jpg' %}
        {% assign img_title = 'Screen protector ' | append: i %}
        <div class="col mb-4">
          {% include figure.liquid path=img_path title=img_title class="img-fluid rounded z-depth-1" %}
        </div>
      {% endfor %}
    </div>
  </article>
</div>

