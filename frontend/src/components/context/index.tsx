// App imports
import { ParametersProvider } from './parameters';
import { ThreeProvider } from './three';
import { SplineProvider } from './spline';
import { ApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <ParametersProvider>
    <ThreeProvider>
    <SplineProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </SplineProvider>
    </ThreeProvider>
    </ParametersProvider>
  )
}

MainProvider.displayName="MainProvider";