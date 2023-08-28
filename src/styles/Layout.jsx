import styled, {css} from "styled-components";

const LayoutStyle = css`
  max-width: 390px;
  margin: 0 auto;
  height: calc(var(--vh, 1vh) * 100);
  background-color: antiquewhite;
`
const Layout = styled.article`
  ${LayoutStyle}
`

export { Layout, LayoutStyle };

