import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const ReviewForms = lazy(() => import("../views/ui/ReviewForms"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      

      { path: "/cards/:no", exact: true, element: <Cards /> }, //수정
      { path: "/grid/:no", exact: true, element: <Grid /> }, //단건조회
      { path: "/table", exact: true, element: <Tables /> }, //상품리스트
      { path: "/forms", exact: true, element: <Forms /> }, // 등록
      { path: "/ReviewForms/:no", exact: true, element: <ReviewForms /> }, // 리뷰수정

    ],
  },
];

export default ThemeRoutes;
