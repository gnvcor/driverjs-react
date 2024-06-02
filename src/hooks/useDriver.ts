import { useContext } from 'react';
import { DriverContext, DriverContextType } from '../providers/DriverProvider';

export const useDriver = (): DriverContextType => {
  const { driver, setSteps } = useContext(DriverContext);

  return {
    driver,
    setSteps
  };
};
