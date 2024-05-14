import { useContext } from 'react';
import { Driver as DriverType } from 'driver.js';
import { DriverContext } from '../providers/DriverProvider';

export const useDriver = (): { driver?: DriverType } => {
  const { driver } = useContext(DriverContext);

  return {
    driver
  };
};
