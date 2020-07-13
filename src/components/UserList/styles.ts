import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  & a {
    text-decoration: none;
    color: #857575;
    & :hover {
      opacity: 0.7;
    }
  }
  button {
    background: tomato;
    border-radius: 5px;
    font-weight: bold;
    border: 0;
    margin: 3px;
    color: white;
    cursor: pointer;
    padding: 5px;
    text-transform: uppercase;
    &:hover {
      opacity: 0.7;
    }
    &:focus {
      outline-color: red;
    }
  }
`;

export const Item = styled.div`
  background: blue;
  align-items: center;
  padding: 4px 16px;
  margin: 4px;
  background: lightblue;
  width: 200px;
  span:last-child {
    padding-left: 10px;
  }
`;
