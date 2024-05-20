import 'driver.js/dist/driver.css';
import React, {
  createContext, FC, ReactNode, useEffect, useState
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
  const [driverInstance, setDriverInstance] = useState<DriverType | undefined>();

  useEffect(() => {
    setDriverInstance(driver(driverOptions));
  }, []);

  const driverContextValues = {
    driver: driverInstance
  };

  return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>;
};
