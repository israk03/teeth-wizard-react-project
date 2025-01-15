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
        loader: async () => {
          const serviceRes = await fetch("/service.json");
          const servicesData = await serviceRes.json();

          const feedbackRes = await fetch("happyclients.json");
          const feedbackData = await feedbackRes.json();

          return { servicesData, feedbackData };
        },
      },
      {
        path: "/appointments",
        element: <MyAppoinments></MyAppoinments>,
      },
      {
        path: "/treatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
