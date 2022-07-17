import { useState } from 'react';

export type FilterTypes = 'Beer' | 'Wine' | 'Spirits' | 'Cider';

interface Filter {
  // [id: number]: string;
  filterType: FilterTypes;
}

interface ProductFilter {
  models: {
    filters: Filter | undefined;
  };
  operations: {
    updateFilter: (filterType: FilterTypes) => void;
  };
}

const useProductFilters = (): ProductFilter => {
  const [filters, _updateFilter] = useState<Filter>();

  const updateFilter = (type: FilterTypes) => {
    // console.log('updating fiulter', filterType, value);
    console.log('previosu state', filters);
    // _updateFilter({ [filterType]: value });
    _updateFilter({ filterType: type });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
};

export default useProductFilters;
