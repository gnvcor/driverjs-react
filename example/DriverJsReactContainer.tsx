import React, { FC } from 'react';
import { StepComponent, useDriver } from '../src';

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
