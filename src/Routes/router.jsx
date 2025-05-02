import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

import MainLayout from "../Layouts/MainLayout";
import OnCOnstruction from "../Components/OnConstruction/OnCOnstruction";
import LiveAiCoach from "../Components/Live Ai Coach/LiveAiCoach";

export const router = createBrowserRouter([
  {
    // This is the main layout for the application
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      { path: "/", element: <HomeLayout /> },
      { path: "/about", element: <OnCOnstruction/>},
      { path: "/pricing", element: <OnCOnstruction/>},
      { path: "/consulting", element: <OnCOnstruction/>},
      { path: "/courses", element: <OnCOnstruction/>},
      { path: "/ai", element: <div className="blue-gradient mx-auto"><LiveAiCoach></LiveAiCoach></div>},
    ],
  },
  {
    path: "/test",
    element: <div>This is Test Page</div>,
  },
]);
