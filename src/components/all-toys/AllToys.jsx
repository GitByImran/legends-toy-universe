import React, { useEffect, useState } from "react";
import axios from "axios";
import AllToyCard from "./AllToyCard";
import { Container } from "react-bootstrap";

const AllToys = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://legends-toy-universe-server-gitsbyimran.vercel.app/toys"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <h2>Loading toys : {data.length}</h2>

        <div className="all-toys">
          {!loading &&
            data.map((item) => (
              <AllToyCard key={item._id} item={item}></AllToyCard>
            ))}
        </div>
      </Container>
    </div>
  );
};
export default AllToys;
