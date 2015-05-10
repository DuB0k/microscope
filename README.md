# microscope
App created following discover-meteor book

# Discover meteor

## First steps
###Install meteorite

$ sudo -H npm install meteorite

>Meteorite allows to install third-party packages

###Create microscope app

$ mrt create microscope

>Using meteorite instead of meteor

###Add bootstrap 3 to the project
$ meteor add twbs:bootstrap

$ mrt add twbs:bootstrap

>Add bootstrap to smart.json and smart.lock

###Setup project app
Create five root directories inside /microscope:

>/client, /server, /public, /lib, /collections

Also create empty *main.html* and *main.js* files inside /client.

>Code in the /server directory only runs on the server. 
Code in the /client directory only runs on the client. 
Everything else runs on both the client and server. 
Files in /lib are loaded before anything else.
Any main.* file is loaded after everything else.
Your static assets (fonts, images, etc.) go in the /public directory.

###Added some css
CSS automatically gets loaded and minified by Meteor, so unlike other static assets it goes into /client, not /public.
