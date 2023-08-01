// индивидуальная страница машины
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from "../screens/home/Home.jsx";
// import CarDetail from "../screens/car-detail/CarDetail.jsx";

const Router = () => {
    console.log("Home=", <Home />)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                
                {/* организем получение карточки по ID машины */}
                {/* <Route element={<CarDetail />} path="/car/:id" /> */}

                <Route element={ <div>Not found</div> } path="*" />
            </Routes>
        </BrowserRouter>
    )
    
}

export default Router;