<div align="center">
    <img alt="MISC" src="src/images/umisc_logo_black.png" width="150" />
    <h2>MISC Website</h2>

![landing-page-preview](./landing-page.png)
</div>


#### Purposes:
- Expand the club's brand image
- Provide information about the club and how to join
- Provide information about all MISC events
- Be the home of "challenge of the week" posts and writeups [soon™]

### Development and Maintenance

The website is a static site built using [Gatsby](https://www.gatsbyjs.org/) which is based on [React](https://www.gatsbyjs.org/) and uses [GraphQL](https://graphql.org/) to access data.

## 🚀 Quick start

Clone the repository. The rest of this guide will assume you are in the root of the repository.

1. **Install the Gatsby CLI**

```bash
yarn global add gatsby-cli

# or if you must...
npm install -g gatsby-cli
```

2. **Install packages**

```bash
yarn install

# or if you must...
npm install
```

3. **Start the development server**

```
gatsby develop
```

A hot-reloading development environment should now be accessible at `localhost:8000`.

## 🗂 Project Structure

    .
    |-- node_modules
    |-- src
    |  |-- components
    |  |-- templates
    |  |-- images
    |  |-- pages
    |  |-- posts
    |  |   |-- 2019-10-06-post1 (folder)
    |  |   |   └-- index.md
    |  |   └-- ...
    |  └-- styles
    |-- .gitignore
    |-- gatsby-browser.js
    |-- gatsby-config.js
    |-- gatsby-node.js
    |-- package-lock.json
    |-- package.json
    └-- README.md

1.  **`/node_modules`**: This directory contains modules used and is created when you run `yarn install` or `npm install`.

2.  **`/src`**: Contains most of the stuff needed to build the website.

    1. **`components`**: Contains `.js` files all of which export a React component that will probably be used in a file in either `pages` or `templates` or both.

    2. **`templates`**: Contains `.js` files all of which export a React component that will probably be used to generate pages (see the bit on `gatsby-node.js`).

    3. **`images`**: Contains images and other assets.

    4. **`pages`**: Contains the static pages (React components). Each page is automatically loaded by Gatsby and turned into a route on the website. For example, the `index.js` file in the `pages` directory exports a React component that will render on the route `/index`.

    5. **`posts`**: Contains folders which themselves contain a markdown file (and any other assets used by said markdown file) which will get built into a route using the `blog-post.js` template in `templates`. This should be one of the most active directories in the sense that new content can be loaded onto the site easily by creating files in this directory. The naming convention `YYYY-MM-DD-post-title` should be used for subdirectories.

    6. **`styles`**: Contains [SASS](https://sass-lang.com/) files as well as standard CSS files. These files need to be imported by the component/template/page that uses them. E.g. at the top of the `blog-template.js` file, there is an `import '../styles/blog.sass'` statement.

3.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. This does not do a lot at the moment.

4.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where site (metadata) like the site title and description is specified, and where Gatsby plugins can be include from. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

5.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. Current usage of this file includes building pages from the markdown files in the `posts` directory.

## 👨‍💻  Contributors

- Main contributor and maintainer - [Joseph Surin](https://github.com/josephsurin) (joseph#8210 on Discord)
- MISC Logo Design - [Shevon Mendis](https://bookofshevon.com/)

## 🧐 Issues

Any issues should be reported to Joseph via Discord or Slack or by making an issue in this repository.
