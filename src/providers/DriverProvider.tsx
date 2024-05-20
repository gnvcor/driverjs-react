import 'driver.js/dist/driver.css';
import React, {
  createContext, FC, ReactNode, useRef
} from 'react';
import { driver, Driver, Config } from 'driver.js';

export type DriverType = Driver;
export type DriverOptionsType = Config;

type DriverContextType = {
  driver?: DriverType
};

type DriverProviderType = {
  children: ReactNode;
  driverOptions?: DriverOptionsType;
};

const initDriverContext: DriverContextType = {};

export const DriverContext = createContext(initDriverContext);

export const DriverProvider:FC<DriverProviderType> = ({ children, driverOptions = {} }: DriverProviderType) => {
  const driverInstance = driver(driverOptions);
  const driverRef = useRef<DriverType | undefined>(driverInstance);

  const driverContextValues = {
    driver: driverRef.current
  };

  return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>;
};
