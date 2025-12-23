import { createBrowserRouter, Outlet } from "react-router-dom";

// pages
import Home from "./features/home";
import List from "./features/home/list";
import Movie from "./features/home/movies";
import Game from "./features/home/game";
import TrendingNow from "./features/home/trendingnow";
import MyList from "./features/home/myList";
import BrowseByLanguage from "./features/home/BrowseByLanguage";
import Detail from "./features/details/detailPage";

// layouts
import Navbar from "./component/layouts/private/navbar";
import Footer from "./component/layouts/private/footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex grow relative z-0 pt-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />, // ✅ Layout ใช้ร่วมกันทุกหน้า
    children: [
      { index: true, element: <Home /> }, // "/"

      { path: "list", element: <List /> },
      { path: "movies", element: <Movie /> },
      { path: "game", element: <Game /> },
      { path: "trendingnow", element: <TrendingNow /> },
      { path: "mylist", element: <MyList /> },
      { path: "browsebylanguage", element: <BrowseByLanguage /> },

      // detail ใช้ร่วมกับทุกหน้าได้
      { path: "detailPage", element: <Detail /> },
    ],
  },
]);

export default router;
