export const filters = ['Beer', 'Wine', 'Spirits', 'Cider'] as const;

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
  readonly filters: string[];
  onFilter: (index: number) => void;
}

function isOfType(value: string): value is FilterTypes {
  return (
    filters.filter(
      (val) =>
        val === 'Beer' ||
        val === 'Cider' ||
        val === 'Spirits' ||
        val === 'Wine',
    ).length > 0
  );
}
