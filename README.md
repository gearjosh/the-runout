# The Runout

#### A social network about music, December 18, 2018

#### By Josh Gearheart

## Project Description

#### Name of Project:
_The Runout_, AKA: "Letterboxd... but for music!"

#### Project’s Purpose or Goal:
It will be an app to log and review album listens, similar to what letterboxd.com is for movies.

#### List the absolute minimum features the project requires to meet this purpose or goal:

- User can look up an album in the app
- User can log an album as listened
- User can rate and/or review an album
- User can view a profile to see their ratings, reviews, and listens.

#### What tools, frameworks, libraries, APIs, modules and/or other resources will be used?

- React
- Redux
- Discogs API (This one will need some backup, since I've realized there are some albums that Discogs doesn't have)
- Last.fm API (As a backup for Discogs)
- Sass
- Firebase

#### What are the stretch goals?

- Add user authentication so that more than one user can use the site at once.
- Users can pick a list of favorite albums to display on a profile.
- All recently logged albums will live in a CSS grid with sizing relative to how many times they were listened to.  This will function as the homepage.
- Users can filter the homepage by popularity, only showing albums with more or less than a certain number of listens.
- Users can follow other users to see what music they're listening to.
- Users can make and save lists of albums (such as "Top Ten 70s Albums).
- Users can add albums to a "Listen List" for albums that they're interested in.
- Users can search out albums by artist, label, musician, etc.

#### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

- OAuth
- Maybe something else, but that's not clear yet.

## Mockup

See the screenshots below and take a look at capstone-planning.sketch for more details.

### Landing Page
![screenshot](https://raw.githubusercontent.com/gearjosh/capstone-planning/master/img/homepage-version-2.png)
### Landing Page on Scroll
![screenshot](https://raw.githubusercontent.com/gearjosh/capstone-planning/master/img/homepage-version-2-scroll.png)

## Component Tree
![component tree](https://raw.githubusercontent.com/gearjosh/capstone-planning/master/img/component_tree.jpg)

<!-- ### Specs

## Setup/Installation Requirements

### Pre-Install

You must have Node.js an installed on your machine. If not, follow these pre-instructions:

****

#### **Node.js Install**

##### _For OSX_

- First, install Homebrew if it is not installed on your computer already.
  - To install Homebrew, enter the following in order in terminal:
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`

##### _For other operating systems_

Head on over to the [Node website](https://nodejs.org/en/download/) to download and install the appropriate installer for your computer.

##### _Install Node.js_

Now install Node.js like this in terminal: `$ brew install node`.

****

#### **Windows Users**

If you have a windows machine, you may also need a terminal program.  If so, download and install Git BASH at msysgit.github.io, and open it before continuing.

****

### Install

- Open terminal and enter `$ cd Desktop` (or your preferred destination).
- Then enter `$ git clone https://github.com/gearjosh/XXXXX.git`.
- Enter `$ cd XXXXX`.
- Enter `$ npm install`
- Finally, enter `$ npm run start`.

## Notes


## Known Bugs -->


## Support and contact details
- For questions or support open an issue right here in this repo!

## Technologies Used
- This uses Sketch, React, Webpack, Javascript, npm, and more!

### License
This software is licensed under GNU GPLv3.
