import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./views/Layouts/MainLayout";
import HomePage from "./views/Home/Index";
import DefaultLayout from "./views/Layouts/DefaultLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <DefaultLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />,
                    },
                ],
            },
        ],
    },
]);