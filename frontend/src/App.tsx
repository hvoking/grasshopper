// App imports
import { Main } from './components/main';
import { TextTools } from './components/tools/text';
import { Tabs } from './components/tools/tabs';
import { Tools } from './components/tools';
import { ExtraTools } from './components/tools/extra';
import { Header } from './components/tools/header';
import './styles.scss';

// Context providers
import { MainProvider } from './components/context';

export const App = () => {
  return (
    <div className="wrapper">
      <MainProvider>
        <Header/>
        <TextTools/>
        <Tabs/>
        <Tools/>
        <ExtraTools/>
        <Main/>
      </MainProvider>
      <div></div>
    </div>
  );
}