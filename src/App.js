import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/landing_page';
import PostVIew from './PostView/PostVIew';
import FormPage from './Form/FormPage';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/PostView' element={<PostVIew />} />
        <Route path='/FormPage' element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
