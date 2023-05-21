import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authentication/provider/Provider";
import { Container } from "react-bootstrap";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

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

  const handleUpdateSuccess = () => {
    setUpdateTrigger((prevTrigger) => !prevTrigger);
  };

  useEffect(() => {
    fetch(
      `https://legends-toy-universe-server.vercel.app/toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [user, updateTrigger]);

  return (
    <div>
      <p className="text-center">Displaying your toys : {details.length}</p>
      <Container>
        {details.map((toys) => (
          <MyToysCard
            key={toys._id}
            toys={toys}
            handleDelete={handleDelete}
            setUpdateTrigger={setUpdateTrigger}
            handleUpdateSuccess={handleUpdateSuccess} // Pass the setUpdateTrigger function as a prop
          ></MyToysCard>
        ))}
      </Container>
    </div>
  );
};

export default MyToys;
