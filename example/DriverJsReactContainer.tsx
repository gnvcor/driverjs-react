import React, {FC, useEffect} from "react";
import {useDriver} from "../src";

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
        <div id="tour-example-1">tour-example-1</div>
        <div id="tour-example-2">tour-example-2</div>
        <div id="tour-example-3">tour-example-3</div>
        <div id="tour-example-4">tour-example-4</div>
        <button onClick={onShowTour}>Show tour</button>
    </div>
}
