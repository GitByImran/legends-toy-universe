import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authentication/provider/Provider";
import { Container } from "react-bootstrap";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [sorting, setSorting] = useState({ sortBy: "price", order: "asc" });

  useEffect(() => {
    fetchToys();
  }, [user, sorting, updateTrigger]);

  const fetchToys = () => {
    const url = `https://legends-toy-universe-server.vercel.app/toys?email=${user?.email}&sort=${sorting.sortBy}&order=${sorting.order}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this toy?");
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

  const handleSorting = (sortBy) => {
    const newOrder =
      sorting.sortBy === sortBy && sorting.order === "asc" ? "desc" : "asc";
    setSorting({ sortBy, order: newOrder });
  };

  return (
    <div>
      <p className="text-center">Displaying your toys: {details.length}</p>
      <Container>
        <div className="sorting-options">
          <button
            onClick={() => handleSorting("price")}
            className={sorting.sortBy === "price" ? "active" : ""}
          >
            Sort by Price{" "}
            {sorting.order === "asc" ? "▲ low to high" : "▼ hight to low"}
          </button>
          {/* Add more sorting options if needed */}
        </div>
        {details.map((toys) => (
          <MyToysCard
            key={toys._id}
            toys={toys}
            handleDelete={handleDelete}
            setUpdateTrigger={setUpdateTrigger}
            handleUpdateSuccess={handleUpdateSuccess}
          />
        ))}
      </Container>
    </div>
  );
};

export default MyToys;
