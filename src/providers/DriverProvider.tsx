import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import {driver as Driver, Driver as DriverType, Config as DriverConfigType} from 'driver.js'

type DriverContextType = {
    driver?: DriverType
}

const initDriverContext: DriverContextType = {}

export const DriverContext = createContext(initDriverContext)

type DriverProviderType = {
    children: ReactNode;
    driverProps?: DriverConfigType;
}

export const DriverProvider:FC<DriverProviderType> = ({ children, driverProps }: DriverProviderType) => {
    const [driver, setDriver] = useState<DriverType | undefined>();

    useEffect(() => {
        const driverInstance = Driver(driverProps)

        setDriver(driverInstance)
    }, [])

    const driverContextValues = {
        driver
    }

    return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>
}
