# dev-job-github

## Build Setup

Egen : Project Exercise - Job Board Powered by GitHub Jobs

View all the jobs that are currently live via the GitHub Jobs API = DONE
Ability to search jobs based on location, title, company, skill, full-time role = DONE
Implement simple or infinite scroll for the pagination if there are more jobs and you cannot fit them on single page
View details of a specific job as provided in the designs = DONE
Implement a responsive design that works with desktop and mobile browsers = DONE
Implement a light and dark theme mode using a toggle button. Google prefers-color-scheme in CSS, if you are new to it = DONE
Commit your code to a private GitHub repository and deploy the site using the netlify.com starter (free) account = DONE
Write some unit tests for your code. Use Netlify to run unit tests before deploying = In Progress

## Wasn't able to use the actual GitHub Jobs API. Spent most of my day yesterday figuring out 
## the CORS issue. Turns out issue was GitHub has enabled CORs on their API, so you can not make calls from the client to it 
## when the originating domain is not github.com 
## https://forum.freecodecamp.org/t/fetching-json-data-from-github-jobs-api/412096

Two possible approaches: 
-> Use Proxy like an express server. But data flow between backend and frontend is too comples
-> Use GitHub Jobs Proxy wrapper for CORS issue

## So ended up using GitHub Proxy api

## Issues:
Dark Mode issue
Respresnting columns issue

## PoC:
https://www.loom.com/share/7dc607e9c1d0400bb1eb66fc34c83904

## Live Site:
https://nifty-raman-c52037.netlify.app/
