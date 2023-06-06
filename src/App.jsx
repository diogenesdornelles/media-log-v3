import './App.css';
import { GeneralContext } from './Provider/contexts/GlobalGeneralContext';
import Home from './templates/Home';

/**
 * Component JSX that render App
 * @returns {JSX.Element} - return App
 */

function App() {
  return (
    <GeneralContext>
      <Home />
    </GeneralContext>
  );
}

export default App;
