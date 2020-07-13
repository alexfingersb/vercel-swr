import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
  padding: 4px;

  label {
    font-weight: bold;
  }

  label + span {
    padding-left: 4px;
    color: lightslategrey;
  }
`;
