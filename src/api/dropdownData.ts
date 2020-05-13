const courses = [
  {
    id: 1,
    name: 'Breakfast',
  },
  {
    id: 2,
    name: 'Brunch',
  },
  {
    id: 3,
    name: 'Lunch',
  },
  {
    id: 4,
    name: 'Dinner',
  },
  {
    id: 5,
    name: 'Snack',
  },
];
export const getCourses = (): { id: number; name: string }[] => courses;

const difficultyLevels = [
  {
    id: 1,
    name: 'Easy',
  },
  {
    id: 2,
    name: 'Medium',
  },
  {
    id: 3,
    name: 'Complex',
  },
];
export const getDifficultyLevels = (): { id: number; name: string }[] => difficultyLevels;

const units = [
  {
    id: 1,
    name: 'grams',
  },
  {
    id: 2,
    name: 'kg',
  },
  {
    id: 3,
    name: 'l',
  },
  {
    id: 4,
    name: 'ml',
  },
  {
    id: 5,
    name: 'sp',
  },
  {
    id: 6,
    name: 'tsp',
  },
  {
    id: 7,
    name: 'pinch',
  },
  {
    id: 8,
    name: 'pieces',
  },
  {
    id: 9,
    name: 'bunch',
  },
];
export const getUnits = (): { id: number; name: string }[] => units;

const ingredients = [
  {
    id: 1,
    name: 'tomatoes',
  },
  {
    id: 2,
    name: 'potatoes',
  },
  {
    id: 3,
    name: 'carrots',
  },
  {
    id: 4,
    name: 'rice',
  },
  {
    id: 5,
    name: 'salt',
  },
  {
    id: 6,
    name: 'parsley',
  },
  {
    id: 7,
    name: 'sugar',
  },
  {
    id: 8,
    name: 'chocolate',
  },
  {
    id: 9,
    name: 'pepper',
  },
  {
    id: 10,
    name: 'basil',
  },
  {
    id: 11,
    name: 'honey',
  },
  {
    id: 12,
    name: 'bacon',
  },
];
export const getIngredients = (): { id: number; name: string }[] => ingredients;

const equipments = [
  {
    id: 1,
    name: 'large pot',
  },
  {
    id: 2,
    name: 'tongs',
  },
  {
    id: 3,
    name: 'saute pan',
  },
  {
    id: 4,
    name: 'ladle',
  },
  {
    id: 5,
    name: 'whisk',
  },
];
export const getEquipments = (): { id: number; name: string }[] => equipments;

const cookingTime = [
  {
    id: 1,
    name: '<5 minutes',
  },
  {
    id: 2,
    name: '<10 minutes',
  },
  {
    id: 3,
    name: '<20 minutes',
  },
  {
    id: 4,
    name: '<30 minutes',
  },
  {
    id: 5,
    name: '<1 hour',
  },
  {
    id: 6,
    name: '<2 hours',
  },
  {
    id: 7,
    name: 'more than 2 hours',
  },
];
export const getCookingTime = (): { id: number; name: string }[] => cookingTime;

const numberOfIngredients = [
  {
    id: 1,
    name: '5 or fewer ingredients',
  },
  {
    id: 2,
    name: '8 or fewer ingredients',
  },
  {
    id: 3,
    name: 'No restrictions',
  },
];
export const getNumberOfIngredients = (): { id: number; name: string }[] => numberOfIngredients;
