import './App.css';
import Toolbar from './component/Toolbar';
import LayerPanel from './component/LayerPanel';
import Map from './component/Map';

function App() {
  return (
    <div className="gis-wrapper" id="gis-wrapper">
      <Toolbar />
      <LayerPanel />
      <Map />
    </div>
  );
}

export default App;
