import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import RegisterPage from '../pages/registerPage';
import CheckEmailPage from '../pages/checkEmailPage';
import CheckPasswordPage from '../pages/checkPasswordPage'; 
import Forgotpassword from '../pages/Forgotpassword';
import Home from '../pages/home'; 
import MessagePage from '../components/messagePage';
import AuthLayouts from "../layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <AuthLayouts> <RegisterPage /> </AuthLayouts>
            },
            {
                path: "email",
                element: <AuthLayouts> <CheckEmailPage /> </AuthLayouts>
            },
            {
                path: "password",
                element: <AuthLayouts> <CheckPasswordPage /> </AuthLayouts>
            },
            {
                path: "forgot-password",
                element: <AuthLayouts> <Forgotpassword /> </AuthLayouts>
            },
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "user/:userId",
                        element: <MessagePage />
                    }
                ]
            }
        ]
    }
]);

export default router;
