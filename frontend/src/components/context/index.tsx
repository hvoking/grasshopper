// App imports
import { FiltersProvider } from './filters';
import { ThreeProvider } from './three';
import { SplineProvider } from './spline';
import { ApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ThreeProvider>
    <SplineProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </SplineProvider>
    </ThreeProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";