# Simple Static Node Server

Want a quick way to deploy a static site to Heroku? Well look no further because now you can develop and deploy a simple static site to Heroku with this setup.

## Instructions
Simply build your static site in the "public" directory. An index.html, main.css and main.js file have been created for your convenience but you can feel free to organiza your static site however you see fit.

## Heroku Deployment
Assuming that you have the Heroku Toolbelt installed all you have to do to deploy is initalize Git in the root of the main directory (the one contaiing the Procfile, server.js and package.json). Next add all the files in this directory to staging, and commit your changes. Then all you have to do is create a new Heroku app by running the command "heroku create." After that all you have to do is run "git push heroku master" followed by "heroku open" to see your site live.

Feel free fork and add more stuff but this is meant to be a very simple "Node to Heroku" deployment server for quickly creating static websites.

## Dependencies
* Node.js
* Express

Note that you do not need have these installed on your machine. Heroku will automatically install these dependencies when you deploy yoru site.