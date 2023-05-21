import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authentication/provider/Provider";
import { Container } from "react-bootstrap";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://legends-toy-universe-server.vercel.app/toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = confirm("delete ???????");
    if (proceed) {
      fetch(`https://legends-toy-universe-server.vercel.app/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restToys = details.filter((detail) => detail._id !== id);
            setDetails(restToys);
          }
        });
    }
  };


  return (
    <div>
      <h2>My total toys : {details.length}</h2>
      <Container>
        {details.map((toys) => (
          <MyToysCard
            key={toys._id}
            toys={toys}
            handleDelete={handleDelete}
          ></MyToysCard>
        ))}
      </Container>
    </div>
  );
};

export default MyToys;
