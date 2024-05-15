import React from 'react';
import { createRoot } from 'react-dom/client';
import { DriverJsReactContainer } from './DriverJsReactContainer';
import { DriverProvider } from '../src';
import { driverOptions } from './driverOptions';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
        <DriverProvider driverOptions={driverOptions}>
            <DriverJsReactContainer />
        </DriverProvider>
  );
}
