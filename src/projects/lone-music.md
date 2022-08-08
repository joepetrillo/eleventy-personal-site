---
title: "Lone Music"
date: "2022-08-05"
description: "I built this semester-long project for my web programming class at UMass. Lone Music is a social media platform mixing elements of Reddit and Soundcloud, creating a unique listening experience."
---

[Live Website](https://lonemusic.herokuapp.com) | [GitHub Repository](https://github.com/joepetrillo/cs326-final-bullymaguire)

Lone Music is a social media platform I helped build as a semester-long team project in the Introduction to Web Programming class at UMass Amherst. It is envisioned as a new take on music that makes it possible to hear many different versions of vocals over a consistent instrumental (beat). Typically, instrumentals and vocals are combined to create a single finalized sound. We wanted to see if we could make this process more dynamic, fun, and community-driven.

## Inspiration

Lone Music is inspired by BeatStars, SoundCloud, Reddit, and Kanye West's stem player. BeatStars is an online platform where people can go to purchase beats. SoundCloud is a popular site for both emerging and established artists to post their music. The stem player is a handheld device that allows users to control vocals, drums, bass and add effects, allowing for unique customizations of any song. Lone Music creates a central hub for music creators to collaborate more efficiently by combining these inspirations.

## First Steps

Once we had our idea, my team and I started by creating some very rough wireframes of the user interface. We wanted to ensure that it felt similar to what users already felt comfortable with, such as Reddit or Twitter. We also figured out the general structure of the site.

- Login and Signup page
- Main feed page
- Profile page
- New post page
- Instrumental and Vocal page

![feed and post pages](/_tmp/public/img/lone-music/feed-post.png?as=webp)

![login and profile pages](/_tmp/public/img/lone-music/login-profile.png?as=webp)

## Initial API Mistakes

We used Express for our entire site. The REST API we implemented handles three main types of data - users, posts, and comments. Following CRUD principles, each resource can be created, read, updated, and deleted. At first, we made specific endpoints for each of these operations instead of using nested routes and a hierarchical relationship. After realizing our overall setup was messy, we redid it correctly. [This StackOverflow article](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/) was very informative. Also, we were using temporary JSON data on the server to emulate a database. I discuss how we added MongoDB afterward further down.

Now, if we wanted to create a user, for example, we would use a POST request with a JSON body on `/users` instead of on `/createuser`. To read a specific user, we would send a GET request on `/users/id` instead of on `/getuser?id=123`. This was a beginner mistake that stemmed from not fully understanding REST. The URLs also look more user-friendly when they are nested. Otherwise, the API came out very well and is probably the cleanest part of our project.

## The Frontend

Styling was definitely tricky, considering the time restraints that we were under. However, the site came out quite similar to our initial wireframes. We used Boostrap here and there (like for the navbar), but we found it easier to use plain CSS most of the time. Flexbox was heavily used and came in handy for many parts of the design.

We shared one huge CSS file for every page, which made it hard to collaborate and use common class names. We tried our best to use the same paddings, margins, and font sizes wherever we could, but there are probably a good handful of unused styles and messy code. If I were to redo this project, I would use TailwindCSS, as it's currently my go-to CSS framework and would help solve these sorts of issues. Here are some screenshots.

![feed page](/_tmp/public/img/lone-music/feed.png?as=webp)
![new post page](/_tmp/public/img/lone-music/new-post.png?as=webp)

## Adding MongoDB

To add data persistence, we could choose from PostgreSQL and MongoDB. MongoDB was the obvious choice for us since all of our API was already using mock JSON data that could easily be converted to queries. We created three collections to store users, posts, and comments. Integration was a breeze; surprisingly, we did not encounter any significant issues. Since this was for a school project, security was not a priority and could be improved. See the example below, which models an example user.

```json
{
 "_id":{
 "Mongo Generated ID"
 },
 "userId": "Server ID",
 "email": "Email",
 "username": "Username",
 "password": "Password",
 "picture": "Picture URL"
}
```

## Authentication

We were briefly taught how to use the passport.js library to handle logging in and authenticating users. This was **by far** the most challenging part of the project. Logging in is done using an email and password, which the server uses to authenticate the user and store their information in a session cookie. Express middleware allows us to make the entire site private to only logged-in users. If someone tries to access a page without being authenticated, they will be redirected to log in.

I am interested in learning more about authentication and how to integrate it into future projects properly. It seems to be a topic that many developers struggle to implement adequately from scratch. I'd also not wait until the end of a project to add it as we did here.

## Conclusion

I found this project to be very enjoyable, educational, and fun. A common theme was overestimating what my team and I could integrate in time. We had cut out a lot of features we wanted to include since we did not have enough time or know-how. I also think it's worth mentioning that most of this project used "vanilla" technologies, demonstrating fundamental web skills.
