import styled, {css} from "styled-components";

const LayoutStyle = css`
  max-width: 390px;
  margin: 0 auto;
  height: calc(var(--vh, 1vh) * 100);
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1); /* 양쪽에 흐림 효과를 줍니다 */
  
  position: relative;
`
const Layout = styled.article`
  ${LayoutStyle}
`

export { Layout, LayoutStyle };

