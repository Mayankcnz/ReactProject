import { useState } from 'react';
import {
  Filter,
  filters,
  FilterTypes,
  ProductFilter,
} from '../interfaces/Filter';

// convert to filter type if srtring is valid
// ideally should check against the array using includes function for future proof
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
    _updateFilter({ filterType: type });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
};

export default useProductFilters;
