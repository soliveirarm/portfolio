import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StickyBar from "../components/NavBar";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1024px;
`;

function Root() {
  return (
    <>
      <Main>
        <StickyBar />
        <Outlet />
      </Main>
    </>
  );
}

export default Root;
