---
title: Building My Personal Website
date: "2021-12-30"
description: This website was a great way to practice my CSS skills and dive into using a static site generator for the first time. I post my blog posts and project updates here.
---

My personal site (the site you are currently reading this on) was a great way for me to practice my basic HTML/CSS/Javascript fundamentals. I used a static site generator for the first time and found it made the project much easier.

## The Design

The first step was creating a simple design in figma. I wanted something that was clean and easy on the eyes. Here are the early designs I came up with. You can see the similarities in the finished product, especially in the overall structure/layout.

![Original design desktop](/public/img/Desktop.png)

![Original design mobile](/public/img/Mobile.png)

## The SSG

Next, I had to decide what static site generator I wanted to use. When I was searching I came across several popular choices such as Jekyll, Hugo, Gatsby, Hexo and Eleventy. [This website](https://jamstack.org/generators/) is a great resource for a master list.

In the end I decided on using Eleventy. Since I was not using React or any other libraries/frameworks, I needed something that was good for simple "vanilla" sites. Eleventy markets itself as a "simpler static site generator" and as a "JavaScript alternative to Jekyll." This is a perfect option for a site like this one and for me since I am not familiar with Ruby (Jekyll uses it).

Eleventy supports many different templating languages like Liquid and Nunjucks. I decided to get familiar with the basics of Nunjucks and found it very easy to work with.

## The HTML

Now that I had my tool chain ready to go, it was time to start building. I originally had a basic html layout done that I was working on before I decided to use a SSG (static site generator). I simply converted this to work nicely with eleventy. I started with creating the layouts that eleventy uses.

I created the following

- base.njk (for all pages to use)
- article.njk (for blog and project posts like this one)
- header.njk (for the header that is consistent across pages)
- footer.njk (for the footer that is consistent across pages)

## The CSS

The hardest part of this project was **definitely** the CSS. CSS is notorious for being somewhat of a pain to work with and stylesheets can become overly complex and hard to follow. This initially happened to me and I decided I should reorganize all the styles.

In my old stylesheet, I was at 596 lines of CSS. In my new style sheet, where I took advantage of variables, better selectors and better overall practices, I reduced it to 486 lines achieving the same exact result. Even if its only around 100 lines saved, I now have an organized stylesheet that is of a much higher quality than before.

I used a lot of flexbox and followed best typography scaling practices. I still plan on improving the styling of the site in the future. Maybe with TailwindCSS?

## The Javascript

The Javascript used for this website is very minimal. I only used it for the mobile navigation hamburger button and the date on the footer.

1. For the hamburger I simply used a "click" event listener which would toggle classes on particular items to change the styling.
2. For the date in the footer I simply used Date().getFullYear() so it would always be the proper year.

## Deployment

Deployment was quick and easy thanks to [Netlify](https://www.netlify.com). I used git and github while developing the website so I simply had to choose the repo and the build command for Netlify to use and I was done! Now whenever I push changes to the repo, the website is automatically redeployed and updated with the latest changes.

## Conclusion

I had a blast developing my personal site. I love to see a design come to life and the satisfaction of a long organized stylesheet is a great feeling. I will be updating it here and there adding new styles and features as I see fit. Let me know if you have any suggestions!
