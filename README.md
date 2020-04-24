# Recipes Finder

Exercising **TypeScript, ReactJS and styled components** with a 
simple recipe manager application. 

In the application, you can create **your collection of recipes** 
in a simple and easy to understand way. 

Each recipe has a photo, a title, the ingredients' list, the 
preparation details, the necessary equipment and some other 
details that offer a better understanding of its complexity and 
sizing. 

Also, the existing recipes can be **edited or removed**, if necessary.  

In the application, you can **find** recipes based on **title or 
ingredients**, you can **filter** them by **cooking time**, by 
**wanted or disliked ingredients**, by **course meal**, by the 
**number of ingredients** and by the degree of **difficulty**. 

Also, you can **adapt the ingredient quantities** based on the 
desired **number of servings**.  


## Business Requirements
### Model & Actions
* **create** (title, ingredients, preparation, equipment, 
cooking time, servings, course type, difficulty);
* **edit**;
* **search** (by title, by ingredients);
* **filter** (by cooking time, by wanted/disliked ingredients, 
by courses, by number of ingredients, by difficulty);
* **adapt quantities** based on the desired number of servings;
* **delete**;


## Design Framework
![Recipes App](recipes-app-framework.png?raw=true "Recipes App Framework")


## Credits
Favicon icon by Valeriy from the Noun Project.

Add and delete icon by scott desmond from the Noun Project.

Edit icon by Vincencio from the Noun Project.

Search icon by Kmg Design from the Noun Project.

___
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
