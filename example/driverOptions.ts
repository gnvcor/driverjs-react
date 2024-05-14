import { DriverOptionsType } from '../src';

export const driverOptions: DriverOptionsType = {
  showProgress: true,
  allowClose: false,
  steps: [
    { element: '#tour-example-1', popover: { title: 'Title Tour Example 1', description: 'Description Tour Example 1' } },
    { element: '#tour-example-2', popover: { title: 'Title Tour Example 2', description: 'Description Tour Example 2' } },
    { element: '#tour-example-3', popover: { title: 'Title Tour Example 3', description: 'Description Tour Example 3' } },
    { element: '#tour-example-4', popover: { title: 'Title Tour Example 4', description: 'Description Tour Example 4' } },
  ],
};
