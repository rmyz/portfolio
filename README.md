# Portfolio

**WARNING: THIS PROJECT IS NOT HERE TO BE CLONED, OR TO BE RAN IN LOCAL**

This website is built with the latest web technologies and code standards, everything being open-source.

The Frontend part is a Progressive Web App, done with Next.js, a React framework to build server-side rendering apps, using styled-components for the styling and Jest with React Testing Library for the testing.

On the other hand, the Backend is an Express server, that retrieves data from Github's GraphQL API, uses puppeteer, a web scraper, to get information from my Linkedin profile, and then saves it to Firebase to be able to retrieve it faster, the testing is also done with Jest.

Last part and probably my favorite, the infrastructure, both projects have a TravisCI pipeline, that triggers on every pull request or merge into the master branch, that deploys to Vercel, for the Frontend, and Heroku for my Node.js server.
