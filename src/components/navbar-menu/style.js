import styled from "styled-components";

export const NavbarMenuContainer = styled.div`
  .nav-content {
    font-size: 1.7rem;
    color: black;
    margin: 0 20px;
    font-weight: bold;
    --button-size: calc(var(--nav-size) * 0.6);
    width: 3rem;
    height: var(--button-size);
    background-color: white;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    padding: 3px;
  }

  .nav-content:hover {
    color: #08cf90;
    cursor: pointer;
  }

  .icon-button {
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }
`;
