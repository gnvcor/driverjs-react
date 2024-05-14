import React, {
  createContext, FC, ReactNode, useEffect, useState
} from 'react';
import { driver as Driver, Driver as DriverType, Config as DriverConfigType } from 'driver.js';

export type DriverContextType = {
  driver?: DriverType
};

const initDriverContext: DriverContextType = {};

export const DriverContext = createContext(initDriverContext);

export type DriverProviderType = {
  children: ReactNode;
  driverOptions?: DriverConfigType;
};

export const DriverProvider:FC<DriverProviderType> = ({ children, driverOptions = {} }: DriverProviderType) => {
  const [driver, setDriver] = useState<DriverType | undefined>();

  useEffect(() => {
    const driverInstance = Driver(driverOptions);

    setDriver(driverInstance);
  }, []);

  const driverContextValues = {
    driver
  };

  return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>;
};
