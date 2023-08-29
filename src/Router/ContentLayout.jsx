import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import HeaderBack from "../components/common/Header/HeaderBack";
const ContentLayout = () => {
    return (
        <>
            <HeaderBack text="전체상품" />
            <Outlet />
            <Navbar />
        </>
    )
}

export default ContentLayout;