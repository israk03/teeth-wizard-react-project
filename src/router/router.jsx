import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import MyAppoinments from "../components/MyAppoinments/MyAppoinments";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/appointments",
        element: <MyAppoinments></MyAppoinments>,
      },
      {
        path: "/treatments",
        element: <AllTreatments></AllTreatments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
