import { useContext } from 'react';
import { DriverContext } from '../providers/DriverProvider';

export const useDriver = () => {
    const { driver } = useContext(DriverContext);

    return {
        driver
    }
}
