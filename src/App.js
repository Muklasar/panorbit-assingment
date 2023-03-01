import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './store/actions/UserAction';
import DashdoardPermission from './components/Dashboard/DashdoardPermission';

const Landing = lazy(() => import('./pages/LandingPage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./components/Profile/Profile'))
const Post = lazy(() => import('./components/Post/Post'))
const Gallary = lazy(() => import('./components/Gallary/Gallary'))
const Todos = lazy(() => import('./components/Todos/Todos'))

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserData())
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Suspense fallback="Loading..">
            <Landing />
          </Suspense>
        } />
        <Route path="/dashboard" element={
          <Suspense fallback="Loading..">
            <DashdoardPermission>
              <Dashboard />
            </DashdoardPermission>
          </Suspense>
        } >
          <Route exact path="profile/:id" element={
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
