import { Navbar } from 'flowbite-react';
import img from '../assets/images/somOndulado.png';

function Nav() {
  return (
    <div className="sticky top-0 z-[9999]">
      <Navbar fluid={true} rounded={false}>
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src={img}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Media-Log
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="/">
            <p className="text-lg">Home</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
