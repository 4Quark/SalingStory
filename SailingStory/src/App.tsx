// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css';
// import './styles/header.css';
import { BrowserRouter, NavLink, Routes, Route } from '../node_modules/react-router-dom/dist/index';
import Homepage from './pages/home';
import Courses from './pages/courses';
import Rental from './pages/rental';
import Trip from './pages/trip';
import About from './pages/about';
import Blog from './pages/blog';
import NotFound from './pages/notFound';
import Footer from './components/footer';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <NavLink className="logo" to="/">
            <h1 className="logo_header">
              Sailing <em className="logo_em">Story</em>
            </h1>
          </NavLink>
          <div className="navigation">
            <NavLink className="nav_link" to="/courses">
              Курсы и обучение
            </NavLink>
            <NavLink className="nav_link" to="/rental">
              Аренда яхты
            </NavLink>
            <NavLink className="nav_link" to="/trip">
              Экскурсии и прогулки
            </NavLink>
            <NavLink className="nav_link" to="/about">
              Контакты
            </NavLink>
            <NavLink className="nav_link" to="/blog">
              Блог
            </NavLink>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );

  // return (
  //   <>
  //     <div>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>

  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App;
