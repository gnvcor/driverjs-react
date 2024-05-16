<h1 align="center">
    <img width="400" src="./public/driverjs-react.svg" />
</h1>

# Driver.js React
[Driver.js](https://github.com/kamranahmedse/driver.js) library port for React.

# Getting Started

### Installing

Yarn:
```bash
yarn add driverjs-react
```

Npm:
```bash
npm install driverjs-react
```
### Using

#### Basic usage example

Import into your React project provider DriverProvider:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DriverProvider, DriverOptionsType } from 'driverjs-react';
import { DriverJsReactContainer } from './DriverJsReactContainer';

const container = document.getElementById('root');

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


if (container) {
  const root = createRoot(container);

  root.render(
        <DriverProvider driverOptions={driverOptions}>
            <DriverJsReactContainer />
        </DriverProvider>
  );
}
```

In your container (for example DriverJsReactContainer) import hook useDriver and init tour:
```tsx
import React, { FC, useEffect } from 'react';
import { useDriver } from 'driverjs-react';

export const DriverJsReactContainer: FC = () => {
  const { driver } = useDriver();

  const onShowTour = () => {
    if (driver) {
      driver.drive();
    }
  };

  useEffect(() => {
    onShowTour();
  }, [driver]);

  return (
      <div>
          <div id="tour-example-1">tour-example-1</div>
          <div id="tour-example-2">tour-example-2</div>
          <div id="tour-example-3">tour-example-3</div>
          <div id="tour-example-4">tour-example-4</div>
          <button onClick={onShowTour}>Show tour</button>
      </div>
  );
};
```
# Documentation

For demos and documentation, visit [driverjs.com](https://driverjs.com/)
