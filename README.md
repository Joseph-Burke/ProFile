API SETUP

1. A couple of pre-requisites will need to be present on your system before starting: 

- **node v10.14.0<=** - I recommend installing nvm (Node Version Manager). From `api/`, run `nvm install 10.14.0 && nvm use 10.14.0`. Then run `node -v` to ensure that version 10.14.0 (or later) is present.
- yarn - a package manager
- postgres (database) - postgres includes the 'createdb' tool by default, which will be required by the project's database set-up script.

2. Run `yarn` in `api` to install dependencies.

3. Run `yarn buildDB` - this command will create the project's database. The only assumption that this command makes is that `createdb` is installed (check `which createdb` if unsure) and that there is not an existing database called `profile`.

4. The final requirement is the presence of a `.env` file to hold potentially sensitive information outside of version control. The project includes a `.env.example` file to give you an idea of what this could like.

5. From here, the project can be run with `yarn start` (`src` files are written in ES6 and are transpiled by Babel into ES5 in the `build` folder). For development, use `yarn startdev` for live refreshing of the code via nodemon. Otherwise, use `yarn start`.

6. Whether running the server in development mode or not, the api server is now running from whatever PORT is listed as in the .env file. If you've used the same details as are in the `.env.example` file, this will be `localhost:9000`. To check whether it's running correctly, open your browser and visit `localhost:9000/users` to view the current list of all users (which may be none if you've just set up the project).

APP SETUP

1. Run `yarn` from the `app` directory.

2. Make sure the api is running at `http://localhost:9000` - if it's running on another port, set the value of the serverURL export found in `app/src/settings.js` to the port the server is running on.

3. Should be pretty simple! While the api is running, just start the project using `yarn start`, and then visit `http://localhost:3000` to view the site.


General Note

The current implementation of the site allows you to see a list of "Profile Cards", each representing a user. This is only a partial implementation of the assignment, but the user should be able to use the new user form to create a user and then see it appear on the page after a refresh. The object relations between Users, Companies and Addresses has not been fully realised yet, so thi
