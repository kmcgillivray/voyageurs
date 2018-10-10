---
layout: page
title: Frequently Asked Questions
headerImage: IMG_9520.jpg
---

We love answering questions about sourdough from people who love eating it. If there's something you want to know that isn't covered here, please reach out and we'll do our best to get you an answer.
{: .f4 .mv4 }

{% for question in site.faqs %}
  <div class="mv3 pa3 br3 ba b--light-gray bw2">
    <h2 data-target="toggle-{{ forloop.index }}" class="toggle-heading mt0 mb1 sky"><span class="toggle-icon"></span>{{ question.title }}</h2>
    <div id="toggle-{{ forloop.index }}" class="toggle-content">{{ question.content }}</div>
  </div>
{% endfor %}
