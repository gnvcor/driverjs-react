import { useContext } from 'react';
import { DriverContext } from '../providers/DriverProvider';
import {Driver as DriverType} from 'driver.js'

export const useDriver = (): { driver?: DriverType } => {
    const { driver } = useContext(DriverContext);

    return {
        driver
    }
}
