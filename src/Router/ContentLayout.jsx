import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import HeaderBack from "../components/common/Header/HeaderBack";
import styled from "styled-components";
const ContentLayout = () => {
    return (
        <>
            <HeaderBack text="전체상품" />
            <OutletStyle>
                <Outlet />
            </OutletStyle>
            <Navbar />
        </>
    )
}

export default ContentLayout;

const OutletStyle = styled.div`
  width: 100% - 60px;
  padding: 80px 30px;
`