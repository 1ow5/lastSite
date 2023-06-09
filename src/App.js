import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Article from './pages/Article/Article';
import WinterRelax from './pages/WinterRelax/WinterRelax';


const Layot = () => {
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layot/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/article",
        element:<Article/>,
        children:[
          {
            path:"/article/winterrelax",
            element:<WinterRelax/>,
          }
        ]
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/winterrelax",
    element:<WinterRelax/>,  
  }
])

function App () {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router = {router}/>
      </div>
      </div>
  );
}

export default App;
