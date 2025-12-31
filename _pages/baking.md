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
      .baking-card {
        overflow: hidden;
      }
      .baking-card .card-img-container {
        position: relative;
        width: 100%;
        padding-top: 75%; /* 4:3 aspect ratio */
        background-color: #f5f5f5;
        overflow: hidden;
      }
      .baking-card .card-img-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .baking-card .card-img-container img.loaded {
        opacity: 1;
      }
      .baking-card .card-img-container picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .baking-card .card-img-container figure {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
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
        {% assign loading_attr = "lazy" %}
        {% if forloop.index <= 4 %}
          {% assign loading_attr = "eager" %}
        {% endif %}
        <div class="col mb-4">
          <div class="card h-100 baking-card">
            <div class="card-img-container">
              {% if item.url %}
                <a target="_blank" href="{{item.url}}" title="{{item.title}}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                  {% include figure.liquid path=img_path title=item.title class="img-fluid" loading=loading_attr %}
                </a>
              {% else %}
                {% include figure.liquid path=img_path title=item.title class="img-fluid" loading=loading_attr %}
              {% endif %}
            </div>
            <div class="card-body">
              <h6 class="card-title">
                {% if item.url %}
                  <a target="_blank" href="{{item.url}}" title="{{item.title}}">{{item.title | capitalize}}</a>
                {% else %}
                  {{item.title | capitalize}}
                {% endif %}
              </h6>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    <script>
      // Add loaded class when images finish loading to fade them in
      document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.baking-card .card-img-container img');
        images.forEach(function(img) {
          // Hide broken image icon
          img.style.display = 'block';
          img.onerror = function() {
            this.style.opacity = '0';
          };
          
          if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
          } else {
            img.addEventListener('load', function() {
              this.classList.add('loaded');
            });
            // Fallback: if image takes too long, show it anyway after 2 seconds
            setTimeout(function() {
              if (!img.classList.contains('loaded')) {
                img.classList.add('loaded');
              }
            }, 2000);
          }
        });
      });
    </script>
  </article>
</div>

