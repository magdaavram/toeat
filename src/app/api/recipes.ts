import recipe1 from '../assets/images/recipe1.png';
import recipe2 from '../assets/images/recipe2.png';
import recipe3 from '../assets/images/recipe3.png';
import recipe4 from '../assets/images/recipe4.png';
import recipe5 from '../assets/images/recipe5.png';
import recipe6 from '../assets/images/recipe6.png';

export interface IRecipe {
  id: number;
  imageUrl: string;
  title: string;
  duration: string;
  difficultyLevel: number;
  servings: number;
  course: string;
}

const recipes: IRecipe[] = [
  {
    id: 1,
    imageUrl: `${recipe1}`,
    title: 'Juicy Burgers',
    duration: '1 hour',
    difficultyLevel: 2,
    servings: 2,
    course: 'Lunch',
  },
  {
    id: 2,
    imageUrl: `${recipe2}`,
    title: 'Chicken and Sage Pasta',
    duration: '1 hour',
    difficultyLevel: 1,
    servings: 4,
    course: 'Lunch',
  },
  {
    id: 3,
    imageUrl: `${recipe3}`,
    title: 'Chili-Lime Chicken Fajita with Avocado',
    duration: '1 hour',
    difficultyLevel: 2,
    servings: 6,
    course: 'Breakfast',
  },
  {
    id: 4,
    imageUrl: `${recipe4}`,
    title: 'Easy, Fall-Off-The-Bone Pork Ribs',
    duration: '3 hours',
    difficultyLevel: 3,
    servings: 2,
    course: 'Lunch',
  },
  {
    id: 5,
    imageUrl: `${recipe5}`,
    title: 'Shrimp Salad',
    duration: '<30 minutes',
    difficultyLevel: 1,
    servings: 1,
    course: 'Dinner',
  },
  {
    id: 6,
    imageUrl: `${recipe6}`,
    title: 'Best Roasted Potatoes',
    duration: '1 hour',
    difficultyLevel: 1,
    servings: 4,
    course: 'Lunch',
  },
];

const getRecipes = () => recipes;
export const getRecipe = (id: number): IRecipe | undefined => {
  return recipes.find((recipe: IRecipe) => recipe.id === id);
};

export default getRecipes;
