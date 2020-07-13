import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../services/useFetch";
import { Container } from "./styles";

export interface User {
  id: string;
  name: string;
}

const UserDetail: React.FC = () => {
  const { id } = useParams();

  const { data } = useFetch<User>(`users/${id}`);
  //   const [data, setData] = useState<User>();

  //   useEffect(() => {
  //     fetch(`http://localhost:3333/users/${id}`).then((response) => {
  //       response.json().then((user) => {
  //         setData(user);
  //       });
  //     });
  //   }, [id]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <h1>User Details</h1>
      <span>
        <label>Id:</label>
        <span>{data.id}</span>
      </span>
      <span>
        <label>Name:</label>
        <span>{data.name}</span>
      </span>
    </Container>
  );
};

export default UserDetail;
