import recipe1 from '../assets/images/recipe1.png';
import recipe2 from '../assets/images/recipe2.png';
import recipe3 from '../assets/images/recipe3.png';
import recipe4 from '../assets/images/recipe4.png';
import recipe5 from '../assets/images/recipe5.png';
import recipe6 from '../assets/images/recipe6.png';

export interface IRecipe {
  imageUrl: string;
  title: string;
  duration: string;
  difficultyLevel: number;
}

const recipes: IRecipe[] = [
  {
    imageUrl: `${recipe1}`,
    title: 'Juicy Burgers',
    duration: '1 hour',
    difficultyLevel: 2,
  },
  {
    imageUrl: `${recipe2}`,
    title: 'Chicken and Sage Pasta',
    duration: '1 hour',
    difficultyLevel: 1,
  },
  {
    imageUrl: `${recipe3}`,
    title: 'Chili-Lime Chicken Fajita with Avocado',
    duration: '1 hour',
    difficultyLevel: 2,
  },
  {
    imageUrl: `${recipe4}`,
    title: 'Easy, Fall-Off-The-Bone Pork Ribs',
    duration: '3 hours',
    difficultyLevel: 3,
  },
  {
    imageUrl: `${recipe5}`,
    title: 'Shrimp Salad',
    duration: '<30 minutes',
    difficultyLevel: 1,
  },
  {
    imageUrl: `${recipe6}`,
    title: 'Best Roasted Potatoes',
    duration: '1 hour',
    difficultyLevel: 1,
  },
];

const getArticles = () => recipes;

export default getArticles;
