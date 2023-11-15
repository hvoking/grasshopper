// App imports
import { ParametersProvider } from './parameters';
import { SearchProvider } from './search';
import { SplineProvider } from './spline';
import { ApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <ParametersProvider>
    <SearchProvider>
    <SplineProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </SplineProvider>
    </SearchProvider>
    </ParametersProvider>
  )
}

MainProvider.displayName="MainProvider";