---
layout: page
title: Frequently Asked Questions
---

{% for question in site.faqs %}
  <h2>{{ question.title }}</h2>
  {{ question.content }}
{% endfor %}
