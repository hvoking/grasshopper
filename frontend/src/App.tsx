import './App.scss';
import TextTools from './components/tools/TextTools/TextTools';
import Tabs from './components/tools/Tabs/Tabs';
import Tools from './components/tools/Tools/Tools';
import ExtraTools from './components/tools/ExtraTools/ExtraTools';
import Main from './components/main/Main';

import { PositionProvider } from './context/MainContext';
import { SplinePositionProvider } from './context/SplineContext';

function App() {
  return (
    <div className="wrapper">
      <div className="header">Grasshopper - unnamed</div>
      <TextTools />
      <Tabs />
      <Tools />
      <ExtraTools />
       <SplinePositionProvider>
        <PositionProvider>
          <Main />  
        </PositionProvider>
      </SplinePositionProvider>
      <div></div>
    </div>
  );
}


export default App;
