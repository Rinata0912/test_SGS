import { AboutUs } from 'components/AboutUs/AboutUs';
import { Banner } from 'components/Banner/Banner';
import { Header } from 'components/Header/Header';
import { Portfolio } from 'components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Portfolio />
      <AboutUs />
    </div>
  );
}

export default App;
