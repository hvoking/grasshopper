import './App.scss';
import TextTools from './components/TextTools';
import Tabs from './components/Tabs';
import Tools from './components/Tools';
import ExtraTools from './components/ExtraTools';
import Main from './components/Main';

import { PositionProvider, SplinePositionProvider } from './context/Context';

function App() {
  return (
    <div className="wrapper">
      <div className="header">Grasshopper - unnamed</div>
      <TextTools />
      <Tabs />
      <Tools />
      <ExtraTools />
      <PositionProvider>
        <SplinePositionProvider>
          <Main />  
        </SplinePositionProvider>
      </PositionProvider>
      <div></div>
    </div>
  );
}


export default App;
