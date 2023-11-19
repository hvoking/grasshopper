// App imports
import { ParametersProvider } from './parameters';
import { SplineProvider } from './spline';
import { ApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <ParametersProvider>
    <SplineProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </SplineProvider>
    </ParametersProvider>
  )
}

MainProvider.displayName="MainProvider";