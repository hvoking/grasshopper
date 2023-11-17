// App imports
import { ParametersProvider } from './parameters';
import { SearchProvider } from './search';
import { SplineProvider } from './spline';
import { ApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <ParametersProvider>
    <SplineProvider>
    <ApiProvider>
    <SearchProvider>
      {children}
    </SearchProvider>
    </ApiProvider>
    </SplineProvider>
    </ParametersProvider>
  )
}

MainProvider.displayName="MainProvider";