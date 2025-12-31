---
layout: page
title: Baking
description: I like mixing flavors
permalink: /baking
nav: true
nav_order: 4
image-dir: /assets/images/posts/baking/
baked-goods:
  - id: miso-cookies-with-furikake
    title: miso cookies with furikake
  - id: genmaicha-russian-honey-cake
    title: genmaicha russian honey cake
  - id: broken-heart-cake
    title: broken heart cake
    url: https://www.instagram.com/p/CobfG-MMLNt/
  - id: gochujang-cookies
    title: gochujang cookies
    url: https://lapis-lychee-877.notion.site/Gochujang-Caramel-Cookies-29db302c137e4aad8698ac94e524b0fd
  - id: hojicha-tiramisu
    title: hojicha tiramisu
  - id: cheddar-shortbread
    title: cheddar shortbread
  - id: ube-cheesecake
    title: ube cheesecake
---

<div class="post">
  <article class="post-content">
    <style>
      .baking-card img {
        max-height: 200px;
        object-fit: cover;
      }
      .baking-card .card-body {
        padding: 0.75rem;
      }
      .baking-card .card-title {
        font-size: 0.9rem;
        margin-bottom: 0;
      }
    </style>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {% for item in page.baked-goods %}
        {% assign img_path = page.image-dir | append: item.id | append: '.jpg' %}
        <div class="col mb-4">
          <div class="card h-100 baking-card">
            {% if item.url %}
              <a target="_blank" href="{{item.url}}" title="{{item.title}}">
                {% include figure.liquid path=img_path title=item.title class="card-img-top img-fluid rounded" %}
              </a>
              <div class="card-body">
                <h6 class="card-title">
                  <a target="_blank" href="{{item.url}}" title="{{item.title}}">{{item.title | capitalize}}</a>
                </h6>
              </div>
            {% else %}
              {% include figure.liquid path=img_path title=item.title class="card-img-top img-fluid rounded" %}
              <div class="card-body">
                <h6 class="card-title">{{item.title | capitalize}}</h6>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </article>
</div>

