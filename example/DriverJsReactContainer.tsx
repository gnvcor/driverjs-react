import React, {FC, useEffect} from "react";
import {useDriver} from "../src/hooks/useDriver";

export const DriverJsReactContainer: FC = () => {
    const { driver } = useDriver()

    useEffect(() => {
        if (driver) {
            driver.drive();
        }
    }, [driver])

    const onShowTour = () => {
        if (driver) {
            driver.drive();
        }
    }

    return <div>
        <button onClick={onShowTour}>Show tour</button>
    </div>
}
