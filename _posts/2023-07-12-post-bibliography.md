---
layout: post
title: a post with bibliography
date: 2023-07-12 09:56:00-0400
description: an example of a blog post with bibliography
tags: formatting bib
categories: sample-posts
giscus_comments: true
related_posts: false
related_publications: true
---

This post shows how to add bibliography to simple blog posts. We support every citation style that [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) does. 

Note: To use citation tags like `cite`, `reference`, and `quote`, you need to install the jekyll-scholar gem and configure it in your `_config.yml`. 

Example usage (requires jekyll-scholar):
- Simple citation: `{% raw %}{% cite einstein1950meaning %}{% endraw %}`
- Multiple citations: `{% raw %}{% cite einstein1950meaning einstein1905movement %}{% endraw %}`
- Long references: `{% raw %}{% reference einstein1905movement %}{% endraw %}`

If you would like something more academic, check the [distill style post]({% post_url 2018-12-22-distill %}).
