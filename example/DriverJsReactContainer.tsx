import React, {FC, useEffect} from "react";
import {useDriver} from "../src/hooks/useDriver";

export const DriverJsReactContainer: FC = () => {
    const { driver } = useDriver()

    const onShowTour = () => {
        if (driver) {
            driver.drive();
        }
    }

    useEffect(() => {
        onShowTour()
    }, [driver])

    return <div>
        <button onClick={onShowTour}>Show tour</button>
    </div>
}
