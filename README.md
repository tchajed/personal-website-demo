# Academic personal website

This is a relatively simple scaffold for an academic personal website, using the
[11ty](https://www.11ty.dev/) static-site generator.

## Installation

To get started, you'll need to use git to clone this repository, install Node.js
to run the generator (for testing locally), and then edit the code in a text
editor.

If you've never done this kind of thing before, on Windows you can use the [git
binary installer](https://git-scm.com/download/win) or [GitHub
desktop](https://desktop.github.com/). There are a lot of tutorials on version
control with git, but it's a big topic that hopefully you won't need for your
personal website where you aren't collaborating with anyone.

To build locally you'll just need [Node.js](https://nodejs.org/en/), a
widely-used JavaScript runtime. There are several ways to install it, depending
on your operating system. On macOS if you use Homebrew that's the simplest
option (`brew install node`), while on Linux I think
[nvm](https://github.com/nvm-sh/nvm) is the most flexible way to get a recent
version. On Windows I found [nvm for
Windows](https://github.com/coreybutler/nvm-windows) to be easy to use
(confusingly, this is not the same as the main nvm project).

Visual Studio Code is a good choice of text editor on all platforms.

## Using the template

Once you have node installed, you can compile and view the site by running the
following in a terminal at the command line, in the directory with this repo:

```sh
npm install
npm run serve
```

You'll only need to run `npm install` once, and the preview website will
automatically be regenerated as you edit the source code.

This is meant to be a starting point for building your own website, whether that
means cobbling together HTML and CSS from other people's sites or making your
own design. The only interesting feature already implemented is generating a
list of publications on the home page from data.

The place to start looking is [index.njk](index.njk) and
[index.11tydata.js](index.11tydata.js). The `index.njk` file is a [Nunjucks
template](https://mozilla.github.io/nunjucks/templating.html) for the root HTML
file, powered by the data from `index.11tydata.js`. Next, you can take a look at
[main.scss](src/main.scss), which defines the entire styling for the page. It's
written in [Sass](https://sass-lang.com/documentation), which extends CSS with
some nice features like variables and mixins.

## Deploying your website

There are three ways to deploy your site: GitHub Pages, CSAIL hosting, and MIT hosting.

### GitHub pages

You should add this repo to your own GitHub account. Then go to its Settings
page, click on Pages in the sidebar, and enable Pages. Deploy from the
`gh-pages` branch. A GitHub Actions workflow
([build.yml](.github/workflows/build.yml)) automatically compiles and deploys
your site to this branch every time you push to the repository.

By default, your site will be accessible from a URL like
https://tchajed.github.io/personal-website-demo: it will use your username and
whatever you named the repo. However, you can use just https://tchajed.github.io
(again, with your username) by naming your repo tchajed.github.io.

If you're willing to spend money on your website, you can also buy a custom
domain and set it up with GitHub Pages. Take a look at [custom
domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
for the setup instructions. For pricing and availability for domains, you can
try [Namecheap](https://www.namecheap.com/) or [Google
Domains](https://domains.google/). As a quick reference - `chajed.io` costs me
$40/year (on the expensive end because it's a `.io`), while `tchajed.com` would
cost $14/year. You can also get a `.website` or `.xyz` domain at reasonable prices.

When you use a custom domain, note that GitHub Pages is still the one actually
running your website - you're just buying a domain that points to their servers.

### CSAIL

Take a look at https://tig.csail.mit.edu/web-services/personal-web-page/.

You'll need to use AFS, so take a look at
https://tig.csail.mit.edu/data-storage/afs/afs-basic-use/. (Note: AFS is terrible.)

This will be at a URL like https://people.csail.mit.edu/nickolai/.

### MIT

Take a look at https://sipb.mit.edu/doc/afs-and-you/. One thing they don't tell
you: if you change a file, it'll take about 15 minutes to show up (due to
aggressive caching that MIT's web servers do).

This will be at a URL like https://www.mit.edu/~jda/.
