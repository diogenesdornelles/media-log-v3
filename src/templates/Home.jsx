import 'animate.css';
import '../assets/css/Home.css';
import Content from '../components/Home/Content';
import Title from '../components/Home/Title';
import Nav from '../components/Nav';
import Footer from '../components/TheFooter';
import Background from '../components/Home/Background';

/**
 * Component JSX that render Home page
 * @returns {JSX.Element} - return Home page
 */

function Home() {
  return (
    <div>
      <Background />
      <Nav />
      <Title />
      <section className="m-auto mb-96">
        <Content />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
