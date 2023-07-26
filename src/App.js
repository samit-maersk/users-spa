import { Outlet } from 'react-router-dom';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="container">
    <header>
      <NavBar />
    </header>

    <main className="mt-5 mb-5">
      <Outlet />
    </main>
    
    <footer >
      <small className='text-lowercase'>
        <p className="text-end fw-lighter">2023, &copy; all rights reserved!</p>
      </small>
    </footer>
  </div>
  );
}

export default App;
