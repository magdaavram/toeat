import recipe1 from 'assets/images/recipe1.png';
import recipe2 from 'assets/images/recipe2.png';
import recipe3 from 'assets/images/recipe3.png';
import recipe4 from 'assets/images/recipe4.png';
import recipe5 from 'assets/images/recipe5.png';
import recipe6 from 'assets/images/recipe6.png';

export interface IRecipe {
  id: number;
  imageUrl: string;
  title: string;
  duration: number;
  difficultyLevel: number;
  servings: number;
  course: string;
  ingredients: {
    ingredient: string;
    quantity: number;
    unit: Unit;
  }[];
  equipment: string[];
  preparation: string;
}

export type Unit = 'grams' | 'kg' | 'l' | 'ml' | 'sp' | 'tsp' | 'pinch' | 'pieces' | 'bunch';

const recipes: IRecipe[] = [
  {
    id: 1,
    imageUrl: `${recipe1}`,
    title: 'Juicy Burgers',
    duration: 60,
    difficultyLevel: 2,
    servings: 2,
    course: 'Lunch',
    ingredients: [
      {
        ingredient: 'pork meat',
        quantity: 400,
        unit: 'grams',
      },
      {
        ingredient: 'buns',
        quantity: 4,
        unit: 'pieces',
      },
      {
        ingredient: 'jalapenos',
        quantity: 6,
        unit: 'pieces',
      },
      {
        ingredient: 'burger sauce',
        quantity: 100,
        unit: 'ml',
      },
    ],
    equipment: ['large pot', 'tongs', 'saute pan', 'ladle'],
    preparation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    imageUrl: `${recipe2}`,
    title: 'Chicken and Sage Pasta',
    duration: 90,
    difficultyLevel: 1,
    servings: 4,
    course: 'Lunch',
    ingredients: [
      {
        ingredient: 'pasta',
        quantity: 300,
        unit: 'grams',
      },
      {
        ingredient: 'sliced chicken breast',
        quantity: 300,
        unit: 'grams',
      },
      {
        ingredient: 'sage',
        quantity: 3,
        unit: 'pieces',
      },
      {
        ingredient: 'sliced mushrooms',
        quantity: 200,
        unit: 'grams',
      },
      {
        ingredient: 'salt',
        quantity: 1,
        unit: 'pinch',
      },
    ],
    equipment: ['large pot', 'tongs', 'saute pan', 'ladle'],
    preparation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    imageUrl: `${recipe3}`,
    title: 'Chili-Lime Chicken Fajita with Avocado',
    duration: 60,
    difficultyLevel: 2,
    servings: 6,
    course: 'Breakfast',
    ingredients: [
      {
        ingredient: 'pork meat',
        quantity: 400,
        unit: 'grams',
      },
      {
        ingredient: 'buns',
        quantity: 4,
        unit: 'pieces',
      },
      {
        ingredient: 'jalapenos',
        quantity: 6,
        unit: 'pieces',
      },
      {
        ingredient: 'burger sauce',
        quantity: 100,
        unit: 'ml',
      },
    ],
    equipment: ['large pot', 'tongs', 'saute pan', 'ladle'],
    preparation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    imageUrl: `${recipe4}`,
    title: 'Easy, Fall-Off-The-Bone Pork Ribs',
    duration: 180,
    difficultyLevel: 3,
    servings: 2,
    course: 'Lunch',
    ingredients: [
      {
        ingredient: 'pork meat',
        quantity: 400,
        unit: 'grams',
      },
      {
        ingredient: 'buns',
        quantity: 4,
        unit: 'pieces',
      },
      {
        ingredient: 'jalapenos',
        quantity: 6,
        unit: 'pieces',
      },
      {
        ingredient: 'burger sauce',
        quantity: 100,
        unit: 'ml',
      },
    ],
    equipment: ['large pot', 'tongs', 'saute pan', 'ladle'],
    preparation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    imageUrl: `${recipe5}`,
    title: 'Shrimp Salad',
    duration: 30,
    difficultyLevel: 1,
    servings: 1,
    course: 'Dinner',
    ingredients: [
      {
        ingredient: 'pork meat',
        quantity: 400,
        unit: 'grams',
      },
      {
        ingredient: 'buns',
        quantity: 4,
        unit: 'pieces',
      },
      {
        ingredient: 'jalapenos',
        quantity: 6,
        unit: 'pieces',
      },
      {
        ingredient: 'burger sauce',
        quantity: 100,
        unit: 'ml',
      },
    ],
    equipment: ['large pot', 'tongs', 'saute pan', 'ladle'],
    preparation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    imageUrl: `${recipe6}`,
    title: 'Best Roasted Potatoes',
    duration: 60,
    difficultyLevel: 1,
    servings: 4,
    course: 'Lunch',
    ingredients: [
      {
        ingredient: 'pork meat',
        quantity: 400,
        unit: 'grams',
      },
      {
        ingredient: 'buns',
        quantity: 4,
        unit: 'pieces',
      },
      {
        ingredient: 'jalapenos',
        quantity: 6,
        unit: 'pieces',
      },
      {
        ingredient: 'burger sauce',
        quantity: 100,
        unit: 'ml',
      },
    ],
    equipment: ['large pot', 'tongs', 'saute pan', 'ladle'],
    preparation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
      'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const getRecipe = (id: number): IRecipe | undefined => {
  return recipes.find((recipe: IRecipe) => recipe.id === id);
};
