import './App.css';
import { GeneralContext } from './Provider/contexts/GlobalGeneralContext';
import Home from './templates/Home';

function App() {
  return (
    <GeneralContext>
      <Home />
    </GeneralContext>
  );
}

export default App;
