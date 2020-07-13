import React, { useCallback } from "react";
import { mutate as mutateGlobal } from "swr";
import { Container, Item } from "./styles";
import { useFetch } from "../../services/useFetch";
import { Link } from "react-router-dom";
import api from "../../services/api";

export interface User {
  id: number;
  name: string;
}

// const [users, setUsers] = useState<User[]>([]);

const UserList: React.FC = () => {
  const { data, mutate } = useFetch<User[]>("users");

  const handleNameChange = useCallback(
    (id: number) => {
      api.put(`users/${id}`, { name: "Bartolomeu" });
      const updatedUsers = data?.map((user) => {
        if (user.id === id) {
          return { ...user, name: "Bartolomeu" };
        }
        return user;
      });
      mutate(updatedUsers, false);
      mutateGlobal(`users/${id}`, { id, name: "Bartolomeu" });
    },
    [data, mutate]
  );

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data.map((user) => (
        <Container>
          <Link to={`/user/${user.id}`}>
            <Item>
              <span>{user.id}</span>
              <span>{user.name}</span>
            </Item>
          </Link>
          <button onClick={() => handleNameChange(user.id)}>
            Alterar Nome
          </button>
        </Container>
      ))}
    </>
  );
};

export default UserList;
