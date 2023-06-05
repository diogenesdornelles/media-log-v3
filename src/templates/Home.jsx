import Nav from '../components/Nav';
import Footer from '../components/TheFooter';
import Content from '../components/Home/Content';
import 'animate.css';
import '../assets/css/Home.css';

function Home() {
  return (
    <div>
      <div
        id="home-background-1"
        className="-z-[9999] h-screen w-screen fixed"
      ></div>
      <div
        id="home-background-2"
        className="-z-[10000] h-screen w-screen fixed top-20 left-[-30px] md:left-[-52px] animate__animated animate__fadeIn"
      ></div>
      <Nav />
      <div className="p-10 animate__animated animate__fadeInLeft">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white">
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
      <section className="m-auto mb-96">
        <Content />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
