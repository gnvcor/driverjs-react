import React from "react";
import { createRoot } from 'react-dom/client';
import {DriverJsReactContainer} from "./DriverJsReactContainer";
import {DriverOptionsType, DriverProvider} from "../src";

const container = document.getElementById('root');

const driverOptions: DriverOptionsType = {
    showProgress: true,
    steps: [
        { element: '#tour-example-1', popover: { title: 'Animated Tour Example', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "left", align: 'start' }},
        { element: '#tour-example-2', popover: { title: 'Animated Tour Example', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "right", align: 'start' }},
        { element: '#tour-example-3', popover: { title: 'Animated Tour Example', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "top", align: 'start' }},
        { element: '#tour-example-4', popover: { title: 'Animated Tour Example', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "bottom", align: 'start' }},
    ]
}

if (container) {
    const root = createRoot(container);

    root.render(
        <DriverProvider driverOptions={driverOptions}>
            <DriverJsReactContainer />
        </DriverProvider>
    );
}
