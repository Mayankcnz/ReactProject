import { useState } from 'react';
import {
  Filter,
  filters,
  FilterTypes,
  ProductFilter,
} from '../interfaces/Filter';
// convert to filter type if srtring is valid
export function isOfType(value: string): value is FilterTypes {
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
