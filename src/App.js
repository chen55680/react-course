import { Route, Routes } from 'react-router-dom'; 
// 舊版本是Switch+Route

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritePage />} />

        {/* 原本老師是以下方的方式進行路由的配置但因為老師的dom版本為5. 當前最新為6. 因此改以上方element取代舊的配置 */}
        {/* <Route path='/favorites'>
          <FavoritePage />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
