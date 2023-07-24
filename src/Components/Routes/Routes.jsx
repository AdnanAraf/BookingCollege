import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";
import Home from "../Home/Home";
import CardDetails from "../CollegeCard/CardDetails/CardDetails";
import CollegeCart from "../CollegeCartDetails/CollegeCart";
import CartDetails from "../CollegeCartDetails/CartDetails";
import AdmissionPage from "../Admission/AdmissionPage";
import CollegeAdmissionForm from "../Admission/CollegeAdmissionForm";
import Login from "../Login/Login";
import MyCollege from "../MyCollege/MyCollege";
import UserDetails from "../UserDetails/UserDetails";
import Registration from "../Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../Private/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/item/:_id",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://book-college-server-beta.vercel.app/BookingCard/${params.id}`
          ),
      },
      {
        path: "college",
        element: <CollegeCart />,
      },
      {
        path: "/items/:_id",
        element: <CartDetails />,
        loader: ({ params }) =>
          fetch(
            `https://book-college-server-beta.vercel.app/CollegeCard/${params.id}`
          ),
      },
      {
        path: "admission",
        element: <AdmissionPage />,
      },
      {
        path: "admission/college",
        element: <CollegeAdmissionForm />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "mycollege",
        element: <MyCollege />,
      },
      {
        path: "user",
        element: <UserDetails />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
]);

export default Routes;
