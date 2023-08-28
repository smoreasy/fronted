import { Outlet } from "react-router-dom";

import HeaderBasic from "../components/common/Header/HeaderBasic";
import Navbar from "../components/common/Navbar";
const ContentLayout = () => {
    return (
        <>
            <HeaderBasic />
            <Outlet />
            <Navbar />
        </>
    )
}

export default ContentLayout;