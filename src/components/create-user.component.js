import axios from "axios";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

const CreateUsers = () => {
  const [userName, setUsername] = useState("");

  const newUser = (e) => {
    e.preventDefault();
    console.log(userName);
    axios
      .post("https://34.124.158.95/users/add", {
        username: userName,
      })
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={newUser}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={onChangeUsername}
            style={{ textTransform: "uppercase" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <style jsx global>{`
        ::placeholder {
          text-transform: initial !important;
        }
      `}</style>
    </div>
  );
};

export default CreateUsers;
