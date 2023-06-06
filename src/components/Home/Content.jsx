import Info from './Info';
import Measures from './Measures';
import Sheet from './Sheet';
import Data from './Data';

/**
 * Component JSX that render Content Homepage
 * @returns {JSX.Element} - return Content Homepage
 */

function Content() {
  return (
    <div
      id="container-calc-avg"
      className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 w-11/12 h-4/12 mx-auto mt-20 animate__animated animate__fadeIn"
    >
      <Info />
      <Measures />
      <Data />
      <Sheet />
    </div>
  );
}

export default Content;
