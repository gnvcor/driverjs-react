import { useContext } from 'react';
import { DriverContext } from '../driverProvider/DriverProvider';

export const useDriver = () => {
    const { driver } = useContext(DriverContext);

    return {
        driver
    }
}
