import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  color: lightgray;
  justify-content: center;
  align-items: center;
  height: 100vh;
  a {
    font-size: 20px;
    text-decoration: none;
    color: #939;
    &:hover {
      background: lightsteelblue;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;
