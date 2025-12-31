---
layout: page
title: projects
permalink: /projects/
description: Creative projects
nav: true
nav_order: 3
display_categories: [art, coding, craft]
horizontal: false
---

<!-- pages/projects.md -->
<style>
  .projects .card {
    overflow: hidden;
  }
  .projects .card-img-container {
    position: relative;
    width: 100%;
    padding-top: 75%; /* 4:3 aspect ratio */
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .projects .card-img-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .projects .card-img-container img.loaded {
    opacity: 1;
  }
  .projects .card-img-container picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .projects .card-img-container figure {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  /* For horizontal layout, adjust aspect ratio */
  .projects .card .row.no-gutters .col-md-6 .card-img-container {
    padding-top: 100%; /* 1:1 aspect ratio for horizontal cards */
  }
</style>
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign visible_count = 0 %}
  {% for project in categorized_projects %}
    {% if project.visible != false %}
      {% assign visible_count = visible_count | plus: 1 %}
    {% endif %}
  {% endfor %}
  {% if visible_count > 0 %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% if project.visible != false %}
        {% include projects_horizontal.liquid %}
      {% endif %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% if project.visible != false %}
        {% include projects.liquid %}
      {% endif %}
    {% endfor %}
  </div>
  {% endif %}
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% if project.visible != false %}
        {% include projects_horizontal.liquid %}
      {% endif %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% if project.visible != false %}
        {% include projects.liquid %}
      {% endif %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
<script>
  // Add loaded class when images finish loading to fade them in
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.projects .card-img-container img');
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
