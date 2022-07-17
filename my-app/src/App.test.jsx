import { render, renderHook, screen, waitFor } from '@testing-library/react';
import useProductFilters from './services/useProductFilters';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import useProductHook from './services/useProductsHook';

export function useCustomHook() {
  return useQuery(['customHook'], () => 'Hello');
}

test('should update ProductFilterState', () => {
  const { result } = renderHook(() => useProductFilters());

  act(() => {
    result.current.operations.updateFilter('Beer');
  });

  expect(result.current.models.filters?.filterType).toBe('Beer');

  act(() => {
    result.current.operations.updateFilter('Cider');
  });

  expect(result.current.models.filters?.filterType).toBe('Cider');
});

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test('test products', async () => {
  const { result } = renderHook(() => useProductHook(), { wrapper });

  await waitFor(() => {
    console.log('result', result);
  });

  console.log('rfesuklt', result);
});

// expect(result.current.data).toEqual('Hello');
