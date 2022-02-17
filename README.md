# Academic personal website

This is a scaffold for a simple academic personal website, using the
[11ty](https://www.11ty.dev/) static-site generator.

At a high level, what we'll do here is (1) write some code, and (2) compile that
code to HTML and CSS that will make up your website files, and (3) deploy this
website to a hosting service. If you use GitHub Pages to host your website,
steps (2) and (3) will be largely invisible. You'll use some commands locally to
preview your website, but every time you commit and push to your website
repository it will get compiled and deployed automatically (see the section
below on [hosting with GitHub pages](#github-pages) for more details).

This README is long, but you don't have to read the whole thing all at once.
Here's an outline:

- Technical details (how to use this repo)
  - [Installation](#installation)
  - [Using the template](#using-the-template)
  - [Writing a website](#writing-a-website)
  - [Questions you might have](#questions-you-might-have)
- [Deploying your website](#deploying-your-website)
  - [GitHub pages](#github-pages)
  - [CSAIL](#csail)
  - [MIT](#mit)
- [What to put on your website](#what-to-put-on-your-website)
  - [Examples](#examples)

The section on [Using the template](#using-the-template) goes into more detail
on what the code here is doing.

A note on languages used here: this site uses several _template_ languages to
simplify maintaining the website. A website at its core typically has HTML files
(that have the content and structure) and CSS (which controls styling and
placement) - JavaScript can add interactive functionality but we won't need that
here. However, it's nice to be able to do a little programming to _generate_
that HTML and CSS. For that, we use Nunjucks and Sass.

The first thing you should know is that you can always write ordinary HTML in a
Nunjucks file like `index.njk`, and ordinary CSS in a Sass file like
`src/main.scss`. The additional power from Nunjucks is that the data for the
publications list is written in `index.11tydata.js` - this is a JavaScript file,
which gives a lot of flexibility. Again, you don't have to use the full power of
JavaScript, and you'll still benefit from separating the data for the
publications list from the HTML for it in the Nunjucks file.

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
following in a terminal at the command line, in the directory with this repo (if
you're using Visual Studio Code, its built-in terminal can do this, too):

```sh
npm install
npm run serve
```

You'll only need to run `npm install` once. `npm run serve` will let you view
your site locally and automatically regenerates it as you edit the source code.
You can also run `npm run build` for just compiling the code once (useful if
you're deploying by copying to CSAIL or MIT).

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

The file [.eleventy.js](.eleventy.js) sets up the static-site generator to tell
it how to compile this code. The way things are setup the main thing to note
here is that this tells 11ty to copy files in `assets/` directly to your website, so
you can host your photo in the same place as the rest of the site.

## Writing a website

The template doesn't have anything fancy in the way of design. Feel free to look
at existing websites and try to copy parts that you like. For general help on
the web, the MDN from Mozilla is a great resources (here's their [getting
started](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
page).

Browser Developer Tools are a great way to inspect websites and see what makes
them tick - the [Chrome
DevTools](https://developer.chrome.com/docs/devtools/overview/) documentation is
a good overview, as is the
[MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools).
Firefox, Safari, and Edge all have similar features.

## Questions you might have

* What is Eleventy/11ty?

  This is a static-site generator, a program that takes all the inputs for your
  website and outputs its HTML, CSS, and any other files.

* What is Node.js/npm?

  Node.js (or just Node for short) is a framework for running JavaScript outside
  the browser - it's the language that powers 11ty. npm is the Node Package
  Manager, which is how you install the dependencies and run 11ty. If you're
  curious [package.json](package.json) is where the Node.js configuration lives.

* Why do I get security/Dependabot warnings?

  Unfortunately, there's a [bug here in
  11ty](https://github.com/11ty/eleventy/issues/2213). It doesn't affect you,
  nothing is actually insecure. In more detail, 11ty runs a web server to
  preview your work locally (but only while you're working on it). The component
  that runs that has a security vulnerability, which 11ty hasn't yet
  incorporated the fix for. However, it won't affect the _generated_ website you
  deploy, since that isn't using this development web server.

* What are Nunjucks and Sass? What's a `.njk`/`.11tydata.js`/`.scss` file?

  Nunjucks is a template language. It takes the `.njk` file and some associated
  data, and it fills in template instructions like those inside `{% %}` and `{{
  }}` using the data. That data, in our case, comes from a `.11tydata.js` file,
  which is written in JavaScript.

  SCSS is a fancier version of CSS that's a bit nicer to use, but you can always
  write CSS in that file.

* What if I want to make my own design? Or use a different template?

  You definitely can! You can always write HTML and CSS, or copy bits and pieces
  from elsewhere. You might want to use some of the features of
  https://www.11ty.dev/docs/ to build the website - for example, if you have
  multiple pages you can share parts using layouts and partials. You don't have
  to do any of this - copy-pasting code is totally acceptable.


# Deploying your website

We can give you three ways to deploy your site: GitHub Pages, CSAIL hosting, and
MIT hosting.

Which should you go with? This mainly affects the URL your website is at, and
for CSAIL and MIT hosting how you make changes. Regardless of what you choose,
people will be able to find your site through Google (though it can take a few
days before your site gets picked up, and it will help if you link to it from
things like your CSAIL profile and GitHub).

I personally have a custom domain ([chajed.io](https://www.chajed.io)) and host
the page through GitHub Pages. I like having a custom domain since it's short to
give out, and I like owning a little slice of the internet.

### GitHub pages

You should add this repo to your own GitHub account. Then go to its Settings
page, click on Pages in the sidebar, and enable Pages. Deploy from the
`gh-pages` branch. A GitHub Actions workflow
([build.yml](.github/workflows/build.yml)) automatically compiles (by running Eleventy) and deploys
your site to this branch every time you push to the repository.

GitHub Pages is free for public repositories. If you want to use GitHub Pages
with a private repository, you can get a GitHub Pro account for free as a
student by signing up for the [GitHub Student Developer
Pack](https://education.github.com/pack).

By default, your site will be accessible from a URL like
https://tchajed.github.io/personal-website-demo, but it will use your GitHub
username and whatever you named the repo. However, you can use just
https://tchajed.github.io by naming your repo tchajed.github.io (again, change
tchajed to your user name). Take a look at https://pages.github.com/ for some
relevant documentation. Note that we're _not_ using Jekyll for this site, but
instead using Eleventy as a static-site generator.

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

If you have a CSAIL account, you can use their hosting. This will be at a URL
like https://people.csail.mit.edu/nickolai/.

The TIG documentation is confusing, so let me try to walk through it myself.
You'll need to ssh to `login.csail.mit.edu` (with your CSAIL username/password),
then run the following `mkdir ~/public_html` if you don't already have that
directory. Finally, you need to set the permissions on that file, but
specifically its _AFS_ permissions and not the usual UNIX permissions you're
used to seeing with `ls` and modifying with `chmod`:

```
fs setacl ~/public_html system:anyuser none www rl
```

The way to read this is it sets up two permissions: `system:anyuser` has access
`none` (deny by default), then the `www` group has **r**ead and **l**ookup
permissions, which the web server needs to read you website.

You can run `fs listacl ~/public_html` to check the results.

The public documentation is at
https://tig.csail.mit.edu/web-services/personal-web-page/.  You'll need to use
AFS, so take a look at
https://tig.csail.mit.edu/data-storage/afs/afs-basic-use/. (Note: AFS is
terrible.)

Once you have permissions set up, you need to copy over your website to the
CSAIL servers.  Run `npm run build` to compile the website to the `_site`
directory, then compile all the contents of that directory to your `public_html`
directory. You can do that with `rsync -avz _site/
login.csail.mit.edu:./public_html/` (the trailing slash on `_site/` is important
- it tells rsync to copy the contents of `_site`, not the directory itself).
Note that you will need to compile locally and copy over the result because
unfortunately the CSAIL login server doesn't have Node/npm installed. Instead of
`rsync` you should also be able to use an SCP client.

### MIT

This will be at a URL like https://www.mit.edu/~jda/.

Take a look at https://sipb.mit.edu/doc/afs-and-you/. One thing they don't tell
you: if you change a file, it'll take about 15 minutes to show up (due to
aggressive caching that MIT's web servers do).

Take a look at the instructions above for CSAIL. The website is stored at
`~/www` instead of `~/public_html`.  **You won't need to do the AFS setup**
because MIT sets up `~/www` for you. You'll still run `npm run build` to compile
and then copy with `rsync -avz _site/ athena.dialup.mit.edu:./www/`.

# What to put on your website

Some things you should definitely include:

- Name and contact info
- Biographical information (affiliation, undergrad institution typically, often
  your advisor and/or research group)
- Describe your research area. Early on, this might be just a sentence or a
  phrase, but eventually it will become more specific.
- Your publications. This is often something people are looking for, and a great
  opportunity to sell your work even if they aren't specifically looking.
- A (good, professional) photo. Not strictly necessary but very helpful.

What else might you include? A website is a bit like a CV. However, it's also
more free-form so include whatever you want people to see. For example:

- A link to your CV
- Classes you've taught or been a TA for
- Service (program committees, artifact evaluation, sub-reviewing, workshops
  you've organized)
- Hobbies and interests
- Portfolio of your art or coding or whatever other work
- You can make your publications more useful by including links to the PDFs

## Examples

Here are some examples for inspiration, or for copying bits and pieces from:

- [Tej Chajed](https://chajed.io) (my website)
- [Jon Barron](https://jonbarron.info/)
- [Aurojit Panda](https://cs.nyu.edu/~apanda/)
- [Yun-Sheng Chan](https://yunshengtw.github.io/)
- [Deian Stefan](https://cseweb.ucsd.edu/~dstefan/)
- [Frans Kaashoek](https://people.csail.mit.edu/kaashoek/) (my advisor - this is
  what an old school website looks like)
- [Nickolai Zeldovich](https://people.csail.mit.edu/nickolai/) (my other advisor -
  this might not be the prettiest but Nickolai keeps everything extremely
  up-to-date)
