import styled from "styled-components";

export const NavbarContainer = styled.div`
  .nav-container {
    background-color: #1a1818;
    padding: 0.6rem;
    display: flex;
    flex-direction: row;
  }
  .right-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 3%;
  }
  .username {
    font-size: 2rem;
    margin-right: 2%;
  }
  .sign-out {
    font-size: 1.5rem;
  }
  .sign-out:hover {
    color: #08cf90;
    cursor: pointer;
  }
`;
