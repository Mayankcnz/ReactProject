import { useState } from 'react';
import { Filter, FilterTypes, ProductFilter } from '../interfaces/Filter';

// can extend tis hook to have various types of filters, and operations
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
