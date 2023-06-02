import { Footer } from 'flowbite-react';
import img from '../assets/images/github.png'

function TheFooter() {
  return (
    <Footer
      container
      fluid={'true'}
      rounded={'false'}
      style={{ borderRadius: '0px' }}
    >
      <div className="flex gap-x-2">
        <Footer.Copyright
          by="diogenesdornelles"
          href="https://github.com/diogenesdornelles/media-log-v3.git"
          year={2023}
        />
        <img
            alt="github img"
            className="mr-3 h-6 sm:h-9"
            src={img}
          />
      </div>
      <Footer.LinkGroup>
        <Footer.Link href="#">Contato</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default TheFooter;
