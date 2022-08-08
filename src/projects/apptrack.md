---
title: "AppTrack"
date: "2022-08-07"
description: "This summer, I built AppTrack with friends to help interns and new grads find job postings. It sends daily emails to those who sign up with direct links to applications."
---

[Live Website](https://apptrack.tech) | [GitHub Repository](https://github.com/jackbisceglia/apptrack)

AppTrack ensures you'll never miss out on the most prevalent internship and new grad job postings. If you sign up, you will receive daily emails containing the latest updates compiled from popular open-source GitHub repositories. AppTrack uses the PittCSC internship repo, maintained by the Pitt Computer Science Club, and the CoderQuad new grad repo, supported by the community. You'll never receive spam, and you may unsubscribe anytime; just click the link at the bottom of one of our emails.

## Motivation

Trying to keep track of job postings can be a pain. My [roommate](https://jackbisceglia.com) Jack came up with this idea a while back so we didn't have to keep manually checking the repositories where they are posted. Before AppTrack, we built a very similar site we named "InTurn" that served the same purpose. However, it was only aimed at interns and did not have an unsubscribe feature (oops). Also, the emails were not styled and did not include links to the postings. We wanted to make a better version.

## How It Works

This project was built using a modern tech stack, including Typescript, React, React Router, TailwindCSS, Golang, Python, PostgreSQL, and AWS Lambda functions. We may have done a little overengineering 😅. Regardless, check out this diagram to see how our application works.

![diagram](/_tmp/public/img/apptrack/diagram.png?as=webp)

When users sign up, they must choose to receive internship updates, new grad updates, or both. Once a selection is made, and a valid email is entered, the user is added to our database and will begin to receive emails. We rate limit sign-ups using IP addresses to prevent spam.

If a user wants to unsubscribe, they can go to the link at the bottom of any email we have sent. This URL contains their user ID so the API can ensure it matches the user ID of the email entered to be unsubscribed. It would be a significant flaw if we allowed anyone to unsubscribe any email without some form of verification. For example, I get the following error if I manually go to the unsubscribe page and try to remove Jack.

![diagram](/_tmp/public/img/apptrack/unsub.png)

Every day at 12:00PM EST, an AWS serverless function is responsible for checking if either of the two GitHub repos have been updated. If there are any new jobs, they are added to our postings database, and emails are triggered to be sent out. Otherwise, nothing will happen.

## The Future

We plan to implement a "postings" page that allows people to browse all listings we have in our database in a more digestible way (compared to GitHub). Features such as filtering by location and date are some ideas we have so far. The repositories we track are manually maintained. They only typically contain listings for the largest and most popular companies. I think having a spot to go to view these types of places exclusively is helpful.

## Conclusion

We hope this tool is useful and helps anyone looking for a job stay more organized. It was fun to build, and I am especially happy with the simple but modern UI design. Feel free to reach out if you have any questions.
