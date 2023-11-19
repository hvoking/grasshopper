// App imports
import { Main } from './components';
import './styles.scss';

// Context providers
import { MainProvider } from './components/context';

export const App = () => {
  return (
    <MainProvider>
      <Main/>
    </MainProvider>
  );
}