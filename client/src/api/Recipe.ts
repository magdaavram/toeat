export interface IRecipe {
  id: string;
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

const apiUrl = 'http://localhost:4000';

export default class Recipe {
  public async getRecipes(
    page: number,
    pageLimit: number,
    searchTerms: string
  ): Promise<IRecipe[]> {
    const startIndex = (page - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    const terms = searchTerms.split(' ');
    const response = await fetch(`${apiUrl}/recipes`);
    const recipes = await response.json();

    const filteredRecipes: IRecipe[] = recipes.filter((recipe: IRecipe) => {
      const containsTerm = (term: string) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.preparation.toLowerCase().includes(term.toLowerCase());

      return terms.some(containsTerm);
    });

    return filteredRecipes.slice(startIndex, endIndex);
  }

  public async getRecipe(id: string): Promise<IRecipe> {
    const response = await fetch(`${apiUrl}/recipes/${id}`);
    const recipe = await response.json();

    if (recipe === undefined) {
      throw new Error('err');
    }

    return recipe;
  }

  public saveRecipe(recipe: IRecipe) {
    if (recipe.id === undefined) {
      // recipe.id = Recipe.nextId++;
      // recipes.push(recipe);
    } else {
      const index = recipes.findIndex((r) => r.id === recipe.id);

      recipes[index] = recipe;
    }
  }

  public async deleteRecipe(id: string): Promise<void> {
    const response = await fetch(`${apiUrl}/recipes/${id}`, { method: 'DELETE' });
    const data = await response.json();

    if (data.status !== 'success') {
      throw new Error('error');
    }
  }
}

const recipes: IRecipe[] = [
  {
    id: '1',
    imageUrl: '',
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
    id: '2',
    imageUrl: '',
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
    id: '3',
    imageUrl: '',
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
    id: '4',
    imageUrl: '',
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
    id: '5',
    imageUrl: '',
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
    id: '6',
    imageUrl: '',
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
    id: '7',
    imageUrl: '',
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
    id: '8',
    imageUrl: '',
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
    id: '9',
    imageUrl: '',
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
    id: '10',
    imageUrl: '',
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
];
