import styled from "styled-components";

export const HomeContainer = styled.div`
  .item-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 5%;
  }
  .card {
    margin-top: -2.5px !important;
    border: 3px solid black;
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
  .btn-add {
    background-color: green;
  }
  .action-buy {
    font-size: 1.7rem;
    font-family: "Montserrat";
    width: fit-content;
    padding: 0 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    color: #08cf90;
    background-color: white;
    margin: 0 2rem;
    font-weight: bold;
    border: 3px solid black;
  }
  .action-buy:hover {
    color: #07875f;
    cursor: pointer;
  }
  .buy {
    color: white;
  }
  .page-container {
    margin: 2rem;
  }
  .page-title {
    color: white;
    font-family: "Montserrat";
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
  }
  option[value=""][disabled] {
    display: none;
  }
  .page-filter {
    font-size: 2rem;
    font-family: "Montserrat";
    display: flex;
    justify-content: center;
  }
  select {
    margin: 2rem;
    width: 30%;
    border-radius: 2rem;
    padding: 0 1rem;
  }
  select:hover {
    cursor: pointer;
  }
  select:focus {
    border: none;
  }
  .button-reset {
    background-color: orange;
  }
  .none:hover {
    cursor: default !important;
    color: red;
  }
  .none {
    color: red;
  }
`;
