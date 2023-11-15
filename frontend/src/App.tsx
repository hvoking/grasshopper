// App imports
import { Main } from './components/main';
import { TextTools } from './components/tools/text';
import { Tabs } from './components/tools/tabs';
import { Tools } from './components/tools';
import { ExtraTools } from './components/tools/extra';
import './styles.scss';

// Context providers
import { MainProvider } from './components/main/context';

export const App = () => {
  return (
    <div className="wrapper">
      <div className="header">Grasshopper - unnamed</div>
      <MainProvider>
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