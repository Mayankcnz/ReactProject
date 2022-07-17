export const filters = ['All', 'Beer', 'Wine', 'Spirits', 'Cider'] as const;

export type FilterTypes = typeof filters[number];

export interface Filter {
  // [id: number]: string;
  filterType: FilterTypes;
}

export interface ProductFilter {
  models: {
    filters: Filter | undefined;
  };
  operations: {
    updateFilter: (filterType: FilterTypes) => void;
  };
}

export interface FilterProps {
  filters: FilterTypes[];
  onFilter: (index: number) => void;
  selectedFilter: string;
}
