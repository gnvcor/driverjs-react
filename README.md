<h3 align="center">
    <img width="280" src="./public/driverjs-react.png" />
</h3>

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

export const driverOptions: DriverOptionsType = {
  showProgress: true,
  allowClose: false,
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
        <DriverProvider driverOptions={driverOptions}>
            <DriverJsReactContainer />
        </DriverProvider>
  );
}
```
In your container (for example DriverJsReactContainer) import hook useDriver and used StepComponent.<br />
StepComponent has required prop `stepIndex`, which allows you to specify the order of steps:
```tsx
import React, { FC } from 'react';
import { StepComponent, useDriver } from 'driverjs-react';

export const DriverJsReactContainer: FC = () => {
    const { driver } = useDriver();

    const onShowTour = () => {
        if (driver) {
            driver.drive();
        }
    };

    return (
        <div>
            <StepComponent key={0} stepIndex={0} popover={{ title: 'Title Tour Example 1', description: 'Description Tour Example 1' }}>
                <div>tour-example-1</div>
            </StepComponent>

            <StepComponent key={1} stepIndex={1} popover={{ title: 'Title Tour Example 2', description: 'Description Tour Example 2' }}>
                <div>tour-example-2</div>
            </StepComponent>

            <StepComponent key={2} stepIndex={2} popover={{ title: 'Title Tour Example 3', description: 'Description Tour Example 3' }}>
                <div>tour-example-3</div>
            </StepComponent>

            <StepComponent key={3} stepIndex={3} popover={{ title: 'Title Tour Example 4', description: 'Description Tour Example 4' }}>
                <div>tour-example-4</div>
            </StepComponent>
            <button onClick={onShowTour}>Show tour</button>
        </div>
    );
};

```
<details>
    <summary>Or, you can use it like this:</summary>
    Import into your React project provider DriverProvider:
    
```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DriverProvider, DriverOptionsType } from 'driverjs-react';
import { DriverJsReactContainer } from './DriverJsReactContainer';

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

const container = document.getElementById('root');

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
</details>

# Documentation

For demos and documentation, visit [driverjs.com](https://driverjs.com/).
