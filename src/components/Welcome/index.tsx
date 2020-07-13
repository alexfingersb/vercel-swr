import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <Container>
      <h1>Welcome!</h1>
      <div>
        <Link to={"/user/list"}>View users</Link>
      </div>
    </Container>
  );
};

export default Welcome;
