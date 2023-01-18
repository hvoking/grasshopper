// App imports
import { Main } from './components/main';
import { TextTools } from './components/tools/text';
import { Tabs } from './components/tools/tabs';
import { Tools } from './components/tools';
import { ExtraTools } from './components/tools/extra';
import './styles.scss';

// Context providers
import { PositionProvider } from './components/main/context/MainContext';
import { SplinePositionProvider } from './components/main/context/SplineContext';
import { SearchProvider } from './components/main/context/SearchContext';
import { SceneProvider } from './components/main/context/SceneContext';

export const App = () => {
  return (
    <div className="wrapper">
      <div className="header">Grasshopper - unnamed</div>
      <PositionProvider>
        <SearchProvider>
          <TextTools/>
          <Tabs/>
          <Tools/>
          <ExtraTools/>
          <SplinePositionProvider>
            <SceneProvider>
              <Main/>
            </SceneProvider>
          </SplinePositionProvider>
        </SearchProvider>
      </PositionProvider>
      <div></div>
    </div>
  );
}