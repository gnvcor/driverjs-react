import { useDriver as useDriverDefault } from './hooks/useDriver';
import { DriverProvider as DriverProviderDefault, DriverContextType, DriverProviderType } from './providers/DriverProvider';

export const useDriver = useDriverDefault;

export const DriverProvider = DriverProviderDefault;

export type DriverType = DriverContextType['driver'];
export type DriverOptionsType = DriverProviderType['driverOptions'];
