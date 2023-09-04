import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import HeaderBack from "../components/common/Header/HeaderBack";
import styled from "styled-components";
const ContentLayout = () => {
    return (
        <>
            <HeaderBack />
            <OutletStyle>
                <Outlet />
            </OutletStyle>
            <Navbar />
        </>
    )
}

export default ContentLayout;

const OutletStyle = styled.div`
  padding: 80px 40px;
  width: 100%;
  box-sizing: border-box;
  
`