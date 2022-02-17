import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const Exercises = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://34.87.3.135/exercises")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((item, index) => {
            return (
              <tr key={`item-${index}`}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.description}</td>
                <td>{item.duration}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Exercises;
