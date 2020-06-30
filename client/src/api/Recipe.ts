import recipe1 from 'assets/images/recipe1.png';
import recipe2 from 'assets/images/recipe2.png';
import recipe3 from 'assets/images/recipe3.png';
import recipe4 from 'assets/images/recipe4.png';
import recipe5 from 'assets/images/recipe5.png';
import recipe6 from 'assets/images/recipe6.png';

export interface IRecipe {
  id: number;
  imageUrl?: string;
  title: string;
  duration: number;
  difficultyLevel: number;
  servings: number;
  course: string;
  ingredients: IIngredient[];
  equipment: string[];
  preparation: string;
}

export interface IIngredient {
  ingredient: string;
  quantity: number;
  unit: Unit;
}

export type Unit = 'grams' | 'kg' | 'l' | 'ml' | 'sp' | 'tsp' | 'pinch' | 'pieces' | 'bunch';

export default class Recipe {
  private static nextId = 18;

  public getRecipes(page: number, pageLimit: number, searchTerms: string): IRecipe[] {
    const startIndex = (page - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    const terms = searchTerms.split(' ');
    const filteredRecipes: IRecipe[] = recipes.filter((recipe) => {
      const containsTerm = (term: string) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.preparation.toLowerCase().includes(term.toLowerCase());

      return terms.some(containsTerm);
    });

    return filteredRecipes.slice(startIndex, endIndex);
  }

  public getRecipe(id: number): IRecipe | undefined {
    return recipes.find((recipe: IRecipe) => recipe.id === id);
  }

  public saveRecipe(recipe: IRecipe) {
    if (recipe.id === undefined) {
      recipe.id = Recipe.nextId++;
      recipes.push(recipe);
    } else {
      const index = recipes.findIndex((r) => r.id === recipe.id);

      recipes[index] = recipe;
    }
  }

  public deleteRecipe(id: number) {
    const index = recipes.findIndex((recipe) => recipe.id === id);

    recipes.splice(index, 1);
  }
}

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
      'alabala ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
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
  {
    id: 7,
    imageUrl: `${recipe1}`,
    title: '2Juicy Burgers',
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
    id: 8,
    imageUrl: `${recipe2}`,
    title: '2Chicken and Sage Pasta',
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
    id: 9,
    imageUrl: `${recipe3}`,
    title: '2Chili-Lime Chicken Fajita with Avocado',
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
    id: 10,
    imageUrl: `${recipe4}`,
    title: '2Easy, Fall-Off-The-Bone Pork Ribs',
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
    id: 11,
    imageUrl: `${recipe5}`,
    title: '2Shrimp Salad',
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
    id: 12,
    imageUrl: `${recipe6}`,
    title: '2Best Roasted Potatoes',
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
  {
    id: 13,
    imageUrl: `${recipe1}`,
    title: '3Juicy Burgers',
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
    id: 14,
    imageUrl: `${recipe2}`,
    title: '3Chicken and Sage Pasta',
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
    id: 15,
    imageUrl: `${recipe3}`,
    title: '3Chili-Lime Chicken Fajita with Avocado',
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
    id: 16,
    imageUrl: `${recipe4}`,
    title: '3Easy, Fall-Off-The-Bone Pork Ribs',
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
    id: 17,
    imageUrl: `${recipe5}`,
    title: '3Shrimp Salad',
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
];
