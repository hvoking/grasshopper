import './App.scss';
import TextTools from './components/tools/TextTools';
import Tabs from './components/tools/Tabs';
import Tools from './components/tools/Tools';
import ExtraTools from './components/tools/ExtraTools';
import Main from './components/main/Main';

import { PositionProvider } from './context/CanvasPositionContext';
import { SplineStartPositionProvider } from './context/SplineContext';

function App() {
  return (
    <div className="wrapper">
      <div className="header">Grasshopper - unnamed</div>
      <TextTools />
      <Tabs />
      <Tools />
      <ExtraTools />
      <PositionProvider>
        <SplineStartPositionProvider>
          <Main />  
        </SplineStartPositionProvider>
      </PositionProvider>
      <div></div>
    </div>
  );
}


export default App;
