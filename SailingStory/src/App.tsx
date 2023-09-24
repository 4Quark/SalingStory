import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Footer from './components/footer';
import Header from './components/header';
import Races from './pages/races';
import FAQ from './pages/answers';
import Contacts from './pages/contacts';
import FollowUs from './components/followUs';
import Race from './pages/race';

function App() {
  const [scroll, setScroll] = useState<number>(window.scrollY);

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
  }, [handleScroll]);

  const goUp = () => {
    window.scrollTo(0, 0);
    handleScroll();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/next/:raceID" element={<Race />} />
            <Route path="/races" element={<Races />} />
            <Route path="/races/:raceID" element={<Race />} />
            <Route path="/races/races/:raceID" element={<Race />} />
            <Route path="/answers" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {scroll > document.documentElement.clientHeight && (
            <button className="UP_btn" onClick={goUp}>
              ↑
            </button>
          )}
        </main>
        <FollowUs />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
