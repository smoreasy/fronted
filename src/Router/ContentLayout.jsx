import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import HeaderBasic from "../components/common/Header/HeaderBasic";
import HeaderBack from "../components/common/Header/HeaderBack";
import styled from "styled-components";

const BasicLayout = () => {
    return (
        <>
            <HeaderBasic />
            <OutletStyle>
                <Outlet />
            </OutletStyle>
        </>
    )
}

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
const LoginLayout = () => {
    return (
        <>
            <HeaderBasic />
            <OutletStyle>
                <Outlet />
            </OutletStyle>
            <Navbar />
        </>
    )
}

export { BasicLayout, ContentLayout, LoginLayout };

const OutletStyle = styled.div`
  padding: 80px 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: scroll;
  box-sizing: border-box;
`