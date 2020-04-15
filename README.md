# Recipes Finder

Exercising ReactJS with a simple recipe manager application. 

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
![Recipes App](recipes-app-framework.png?raw=true "Recipes App")