import { Outlet } from "react-router-dom";
import Menu from "../components/Menu.jsx";

// компонент <Outlet /> прописывается в родительском компоненте
const MainLayout = () => {
    return (
            <>
                <Menu />
                <Outlet />        
            </>
    );
};

export default MainLayout;