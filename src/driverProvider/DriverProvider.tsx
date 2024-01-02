import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { driver as Driver, Driver as DriverType } from 'driver.js'

type DriverContextType = {
    driver?: DriverType
}

const initDriverContext: DriverContextType = {}

const DriverContext = createContext(initDriverContext)

type DriverProviderType = {
    children: ReactNode
}

export const DriverProvider:FC<DriverProviderType> = ({ children }) => {
    const [driver, setDriver] = useState<DriverType | undefined>();

    useEffect(() => {
        const driverInstance = Driver()

        setDriver(driverInstance)
    }, [])

    const driverContextValues = {
        driver
    }

    return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>
}
