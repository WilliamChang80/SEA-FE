import styled from "styled-components";

export const CardContainer = styled.div`
  color: black;
  font-family: "Montserrat";
  font-weight: bold;
  text-align: center;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
  .card-container {
    background-color: white;
    border-radius: 1rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 2rem;
    padding-bottom: 5px;
  }
  .card-image {
    width: 10rem;
    height: 10rem;
  }
  .card-title {
    color: #0eb57b;
    font-size: 2rem;
    font-weight: bold;
  }
  .card-toggle {
    font-size: 2rem;
    font-weight: bold;
    position: absolute;
    right: 0.3rem;
  }
  .card-toggle:hover {
    cursor: pointer;
  }
  .card-desc {
    border-top: 1.7px solid rgba(56, 56, 56, 0.5);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
  }
  .card-inline-desc {
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(56, 56, 56, 0.8);
    width: 15rem;
    display: flex;
    flex-direction: row;
  }
  .card-inline {
    display: flex;
    flex-direction: row;
    .fa {
      font-size: 1.4rem;
      margin: 5px;
    }
  }
`;
