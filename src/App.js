import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';

const Landing = lazy(()=> import('./components/Landing/LandingPage'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ 
          <Suspense fallback="Loading..">
            <Landing />
          </Suspense>
         } />
      </Routes>
    </div>
  );
}

export default App;
