import 'driver.js/dist/driver.css';
import React, {
  createContext, FC, ReactNode, useEffect, useRef, useState, Dispatch
} from 'react';
import {
  driver, Driver, Config, DriveStep
} from 'driver.js';

export type DriverStepType = DriveStep;
export type DriverType = Driver;
export type DriverOptionsType = Config;

export type DriverContextType = {
  driver?: DriverType
  // TODO: used SetStateAction
  setSteps: Dispatch<((prevState: DriverStepType[]) => DriverStepType[]) | DriverStepType[]>
};

type DriverProviderType = {
  children: ReactNode;
  driverOptions?: DriverOptionsType;
};

const initDriverContext: DriverContextType = {
  setSteps: () => {},
};

export const DriverContext = createContext(initDriverContext);

export const DriverProvider:FC<DriverProviderType> = ({ children, driverOptions = {} }: DriverProviderType) => {
  const [steps, setSteps] = useState<DriverStepType[]>([]);

  const driverRef = useRef<DriverType | undefined>(driver(driverOptions));

  useEffect(() => {
    if (steps.length) {
      const filteredSteps = steps.filter((step) => step);

      driverRef.current?.setSteps(filteredSteps);

      driverRef.current?.drive();
    }

    return () => {
      driverRef.current?.destroy();
    };
  }, [steps]);

  const driverContextValues = {
    driver: driverRef.current,
    setSteps,
  };

  return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>;
};
