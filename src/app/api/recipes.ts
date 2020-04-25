import article1 from '../assets/images/article1.png';
import article2 from '../assets/images/article2.png';
import article3 from '../assets/images/article3.png';
import article4 from '../assets/images/article4.png';
import article5 from '../assets/images/article5.png';
import article6 from '../assets/images/article6.png';

interface IArticle {
  imageUrl: string;
  title: string;
  duration: string;
  difficultyLevel: number;
}

const recipes: IArticle[] = [
  {
    imageUrl: `${article1}`,
    title: 'Juicy Burgers',
    duration: '1 hour',
    difficultyLevel: 2,
  },
  {
    imageUrl: `${article2}`,
    title: 'Chicken and Sage Pasta',
    duration: '1 hour',
    difficultyLevel: 1,
  },
  {
    imageUrl: `${article3}`,
    title: 'Chili-Lime Chicken Fajita with Avocado',
    duration: '1 hour',
    difficultyLevel: 2,
  },
  {
    imageUrl: `${article4}`,
    title: 'Easy, Fall-Off-The-Bone Pork Ribs',
    duration: '3 hours',
    difficultyLevel: 3,
  },
  {
    imageUrl: `${article5}`,
    title: 'Shrimp Salad',
    duration: '<30 minutes',
    difficultyLevel: 1,
  },
  {
    imageUrl: `${article6}`,
    title: 'Best Roasted Potatoes',
    duration: '1 hour',
    difficultyLevel: 1,
  },
];

const getArticles = () => recipes;

export default getArticles;
