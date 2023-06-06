import 'animate.css';

/**
 * Component JSX that render Title Homepage
 * @returns {JSX.Element} - return Title Homepage
 */

function Title() {
  return (
    <>
      <div className="p-10 animate__animated animate__fadeInLeft">
        <h1
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white"
          data-testid="title"
        >
          Média-{' '}
          <mark className="px-2 text-white bg-slate-300 rounded dark:bg-blue-500">
            Log
          </mark>{' '}
          Cálculo
        </h1>
      </div>
      <p
        className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 p-10 animate__animated animate__fadeInLeft"
        data-testid="paragraph"
      >
        Ferramenta destinada ao cálculo de intensidade de exposição ocupacional
        ao ruído por meio de extração da média logarítmica dos diversos níveis
        verificados no ambiente de trabalho.
      </p>
    </>
  );
}

export default Title;
