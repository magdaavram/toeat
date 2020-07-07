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

export interface IRecipeRequest {
  id?: string;
  imageUrl?: string;
  title: string;
  duration: number;
  difficultyLevel: number;
  servings: number;
  course: string;
  ingredients: IIngredientRequest[];
  equipment: string[];
  preparation: string;
}

export interface IIngredientRequest {
  id: string;
  ingredient: string;
  quantity: number;
  unit: Unit;
}

const apiUrl = 'http://localhost:4000';

export default class Recipe {
  public async getAll(page: number, pageLimit: number, searchTerms: string): Promise<IRecipe[]> {
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

  public async get(id: string): Promise<IRecipe> {
    const response = await fetch(`${apiUrl}/recipes/${id}`);
    const recipe = await response.json();

    if (recipe === undefined) {
      throw new Error('err');
    }

    return recipe;
  }

  public async update(recipe: IRecipe): Promise<IRecipe> {
    const request = {
      method: 'PUT',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${apiUrl}/recipes/${recipe.id}`, request);

    return await response.json();
  }

  public async create(recipe: IRecipeRequest): Promise<IRecipe> {
    const request = {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${apiUrl}/recipes`, request);

    return await response.json();
  }

  public async delete(id: string): Promise<void> {
    const response = await fetch(`${apiUrl}/recipes/${id}`, { method: 'DELETE' });
    const data = await response.json();

    if (data.status !== 'success') {
      throw new Error('error');
    }
  }
}
