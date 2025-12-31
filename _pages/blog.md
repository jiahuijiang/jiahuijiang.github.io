---
layout: default
permalink: /writings/
title: Writings
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">{{ site.blog_name }}</h1>
    <p class="post-description" style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--global-text-color-light);">
      View in <a href="https://jjjiahui.substack.com/" target="_blank" style="color: var(--global-theme-color);">Substack</a>
    </p>
  </header>

  <article class="post-content">
    {% if paginator.posts.size > 0 %}
      <ul class="post-list">
        {% for post in paginator.posts %}
          <li>
            <h3>
              <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <p class="post-meta">
              {{ post.date | date: '%B %d, %Y' }}
              {% if post.description %}
                &nbsp; &middot; &nbsp; {{ post.description }}
              {% endif %}
            </p>
            {% if post.tags.size > 0 %}
              <p class="post-tags">
                {% for tag in post.tags %}
                  <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
                  {% unless forloop.last %}
                    &nbsp;
                  {% endunless %}
                {% endfor %}
              </p>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
      {% include pagination.liquid %}
    {% else %}
      <p>Coming soon...</p>
    {% endif %}
  </article>
</div>
