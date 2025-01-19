import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import MyAppoinments from "../components/MyAppoinments/MyAppoinments";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

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
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          //   console.log(singleData);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
