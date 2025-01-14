import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "../src/components/Contact"
import { Provider } from "react-redux";
import ResturantMenu from "./components/ResturantMenu";
import AppStore from "./Utils/AppStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
    <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
    
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
    errorElement:<Error/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
