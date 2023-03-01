import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';

const Landing = lazy(() => import('./pages/LandingPage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./components/Profile/Profile'))
const Post = lazy(() => import('./components/Post/Post'))
const Gallary = lazy(() => import('./components/Gallary/Gallary'))
const Todos = lazy(() => import('./components/Todos/Todos'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Suspense fallback="Loading..">
            <Landing />
          </Suspense>
        } />
        <Route path="/profile" element={
          <Suspense fallback="Loading..">
            <Dashboard />
          </Suspense>
        } >
          <Route exact path="profile" element={
            <Suspense fallback="Loading..">
              <Profile />
            </Suspense>} />
          <Route exact path="post" element={
            <Suspense fallback="Loading..">
              <Post />
            </Suspense>} />
          <Route path="gallary" element={
            <Suspense fallback="Loading..">
              <Gallary />
            </Suspense>} />
          <Route path="todos" element={
            <Suspense fallback="Loading..">
              <Todos />
            </Suspense>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
