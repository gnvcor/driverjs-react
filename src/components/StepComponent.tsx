import React, {
  FC, ReactNode, useEffect, useRef
} from 'react';
import { useDriver } from '../hooks/useDriver';
import { DriverStepType } from '../providers/DriverProvider';

type PropsType = Omit<DriverStepType, 'element'> & {
  children?: ReactNode;
  stepIndex: number
};

export const StepComponent: FC<PropsType> = ({ children, stepIndex, ...driverStepProps }) => {
  const refStep = useRef<HTMLDivElement | null>(null);

  const { setSteps } = useDriver();

  useEffect(() => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];

      newSteps[stepIndex] = { ...(refStep.current ? { element: refStep.current } : {}), ...driverStepProps };

      return newSteps;
    });
  }, []);

  return <div ref={refStep}>{children}</div>;
};
