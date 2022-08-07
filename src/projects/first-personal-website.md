---
title: "My First Personal Website"
date: "2021-12-30"
description: "This was a great way to practice my CSS skills and dive into using a static site generator for the first time. I post my blog posts, project updates, and anything else I want here."
---

My first ever personal site (not this site) was an excellent way for me to practice my basic HTML, CSS, and Javascript fundamentals. I used a static site generator for the first time and found it made the project much more manageable.

## The Design

The first step was creating a simple design in Figma. I wanted something clean and easy on the eyes. Here are the early designs I came up with. You can see the similarities in the finished product, especially in the overall structure/layout.

![Original design desktop](/_tmp/public/img/Desktop.png)

![Original design mobile](/_tmp/public/img/Mobile.png)

## The SSG

Next, I had to decide what static site generator I wanted to use. While searching, I came across several popular choices such as Jekyll, Hugo, Gatsby, Hexo, and Eleventy. [This website](https://jamstack.org/generators/) is a fantastic resource for a master list.

In the end, I decided on using Eleventy. Since I was not using React or other libraries/frameworks, I needed something suitable for simple sites. Eleventy markets itself as a “simpler static site generator” and a “JavaScript alternative to Jekyll.” This is a perfect option for a site like this since I am unfamiliar with Ruby (Jekyll uses it). Eleventy supports many different templating languages like Liquid and Nunjucks. I decided to get familiar with the basics of Nunjucks and found it very easy to work with.

## The HTML

Now that I had my toolchain ready to go, it was time to start building. I originally had a basic HTML layout that I was working on before I used an SSG (static site generator). I simply converted this to work nicely with eleventy. I started with creating the layouts that eleventy uses. I made the following.

- base.njk (for all pages to share)
- article.njk (for blog and project posts like this one)
- header.njk (for the header that is consistent across pages)
- footer.njk (for the footer that is consistent across pages)

## The CSS

The hardest part of this project was **definitely** the CSS. CSS is a pain to work with sometimes, and stylesheets can become overly complex and hard to follow. This initially happened to me, and I decided I should reorganize all the styles.

In my old stylesheet, I was at 596 lines of CSS. In my new style sheet, I took advantage of variables, better selectors, and better general practices. I reduced it to 486 lines achieving the same exact result. Even if it's only around 100 lines saved, I now have an organized stylesheet of much higher quality than before.

I used a lot of flexbox and followed the best typography scaling practices. I still plan on improving the styling of the site in the future. Maybe with TailwindCSS? UPDATE - My latest site (that you are on right now) is using Tailwind!

## The Javascript

The Javascript used for this website is very minimal. I only used it for the mobile navigation hamburger button and the date on the footer.

1. For the hamburger, I simply used a “click” event listener, which would toggle classes on particular items to change the styling.
2. For the date in the footer, I simply used Date().getFullYear() so it would always be the proper year.

## Deployment

Deployment was quick and easy, thanks to [Netlify](https://www.netlify.com). I used git and GitHub while developing the website, so I simply had to choose the repo and the build command for Netlify to use, and I was done! Now, whenever I push changes to the repo, the website is automatically redeployed and updated with the latest changes.

## Conclusion

I had a blast developing my personal site. I love to see a design come to life, and the satisfaction of a long organized stylesheet is a great feeling. I will update it here and there, adding new styles and features as I see fit. Let me know if you have any suggestions!
