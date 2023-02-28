import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';

const Landing = lazy(() => import('./components/Landing/LandingPage'))
const Profile = lazy(() => import('./pages/Profile'))
const MyProfile = lazy(() => import('./components/Profile/MyProfile'))
const Post = lazy(() => import('./components/Profile/Post'))
const Gallary = lazy(() => import('./components/Profile/Gallary'))
const Todos = lazy(() => import('./components/Profile/Todos'))

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
            <Profile />
          </Suspense>
        } >
          <Route exact path="profile" element={
            <Suspense fallback="Loading..">
              <MyProfile />
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
