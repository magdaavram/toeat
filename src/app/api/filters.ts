export interface IFilter {
  name: string;
  active: boolean;
}

const filters: IFilter[] = [
  {
    name: 'tomatoes',
    active: true,
  },
  {
    name: 'potatoes',
    active: false,
  },
  {
    name: 'garlic',
    active: true,
  },
  {
    name: 'spinach',
    active: false,
  },
];

const getRecommendedFilters = () => filters;

export default getRecommendedFilters;
