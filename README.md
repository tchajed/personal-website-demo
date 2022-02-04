# Academic personal website

This is a relatively simple scaffold for an academic personal website, using the
[11ty](https://www.11ty.dev/) static-site generator.

To build you'll just need node.js. Then, you can compile and view the site by
running:

```sh
npm install
npm run serve
```

This is meant to be a starting point for building your own website, whether that
means cobbling together HTML and CSS from other people's sites or making your
own design. The only interesting feature already implemented is generating a
list of publications on the home page from data.

The place to start looking is [index.njk](index.njk) and
[index.11tydata.js](index.11tydata.js). The `index.njk` file is a [Nunjucks
template](https://mozilla.github.io/nunjucks/templating.html) for the root HTML
file, powered by the data from `index.11tydata.js`. Next, you can take a look at
[main.scss](_src/main.scss), which defines the entire styling for the page. It's
written in [Sass](https://sass-lang.com/documentation), which extends CSS with
some nice features like variables and mixins.
