import styled from "styled-components";

const Navbar = () => {
    return (
        <NavbarStyle>
            <p>navbar에요...</p>
        </NavbarStyle>
    );
}

export default Navbar;

const NavbarStyle = styled.nav`
  width: 100%;
  padding: 20px 0;
  background: #539408;
  
  position: absolute;
  bottom: 0;
`