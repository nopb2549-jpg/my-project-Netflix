import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './features/home'
import List from './features/home/list'
import Movie from './features/home/movies'
import Game from './features/home/game'
import TrendingNow from './features/home/trendingnow'
import MyList from './features/home/myList'
import BrowseByLanguage from './features/home/browseByLanguage'
// layouts
import Navbar from './component/layouts/private/navbar'
import Footer from './component/layouts/private/footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex grow relative z-0 pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  
    children: [
      { path: '', element: <Home /> },
      { path: 'list', element: <List /> },
      { path: 'movies', element: <Movie /> },
      { path: 'game', element: <Game /> },
      { path: 'trendingnow', element: <TrendingNow /> },
      { path: 'mylist', element: <MyList /> },
      { path: 'browsebylanguage', element: <BrowseByLanguage /> },
    ],
  },
])

export default router
