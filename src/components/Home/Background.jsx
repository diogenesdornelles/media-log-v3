/**
 * Component JSX that render Background Homepage
 * @returns {JSX.Element} - return Background Homepage
 */

function Background() {
  return (
    <>
     <div
        id="home-background-1"
        className="-z-[9999] h-screen w-screen fixed"
      ></div>
      <div
        id="home-background-2"
        className="-z-[10000] h-screen w-screen fixed top-20 left-[-30px] md:left-[-52px] animate__animated animate__fadeIn"
      ></div>
    </>
  );
}

export default Background;
