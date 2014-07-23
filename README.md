#Skye: Endless Realm - Meteor Style Redux

##Installation

###Install [node.js](http://nodejs.org/) + [npm](https://www.npmjs.org/)

`sudo apt-get install nodejs nodejs-legacy npm`

###Install [Meteor](https://www.meteor.com/) + [Meteorite](https://github.com/oortcloud/meteorite/)

`curl https://install.meteor.com/ | sh`

`sudo npm install -g meteorite`

###Download all dependencies

`cd skye-meteor`

`mrt install`

###Launch!

`meteor`

##Troubleshooting

If you're running into this issue when trying to run meteor, npm's tmp folder is owned by root. You can either remove the directory or use chmod.

`npm ERR! Please try running this command again as root/Administrator.`

Remove npm's temporary folder (be careful!)

`sudo rm -r ~/tmp`