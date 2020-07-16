import styled from "styled-components";

export const MyItemPageContainer = styled.div`
  .item-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 5%;
  }
  .action-delete {
    color: red;
  }
  .action-delete:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  .action-edit {
    color: orange;
  }
  .action-edit:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const Button = styled.button`
  font-family: "Montserrat";
  margin: 10px;
  border-radius: 1.3rem;
  border: none;
  font-weight: bold;
  padding: 0.2rem 2rem;
  font-size: 2.5rem;
  color: white;
  background-color: orange;
  :hover {
    opacity: 0.9;
  }
  :focus {
    outline: none;
  }
`;
