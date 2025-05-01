import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Hero from "../Components/Hero/Hero";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    // This is the main layout for the application
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      { path: "/", element: <HomeLayout /> },
      { path: "/test", element: <div>This is Test Page</div> },
    ],
  },
  {
    path: "/test",
    element: <div>This is Test Page</div>,
  },
]);
