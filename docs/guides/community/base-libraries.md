# Community >> Base Libraries ||20

## Resources

- [All the ways to build a web component](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) a comparison of different web component libraries.

- [awesome lit-html](https://github.com/web-padawan/awesome-lit-html) a collection of resources related to lit-html, lit-element and general web components.

## Base libraries

Our generator sets you up with a component built with [lit-html](http://lit-html.polymer-project.org/) and [LitElement](https://lit-element.polymer-project.org/) as base libraries. This is our standard recommendation and a solid starting point for most projects, but it's not the only way to build web components.

Below is a listing of web component libraries which all take a different approach to building web component, filing different use cases. Try them out for yourself and pick what's right for your project.

A challenge with listing projects is that some might be abandoned over time. For this reason we sort the projects by weekly NPM downloads. This is a very rough metric, and should not be the only means of judging the quality of a project.

<ul>
{% for lib in baseLibraries %}
  <li>
     <a href="{{ lib.url }}" target="_blank" rel="noopener noreferrer">{{ lib.name }}</a> ({{ lib.downloadsFormatted }} weekly downloads)
     <p>{{ lib.description }}</p>
  </li>
{% endfor %}
</ul>

<!-- The data for this list is maintained in /docs/_data/baseLibraries.js -->

> Note: want to add another base library to this list? Send us a pull request!
