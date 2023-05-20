import React, { useEffect, useState } from "react";
import axios from "axios";
import AllToyCard from "./AllToyCard";
import { Container, Table } from "react-bootstrap";

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
        <h4 className="my-3 text-center">
          Displaying all toys : {data.length}
        </h4>

        <div className="all-toys">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                data.map((item) => (
                  <AllToyCard key={item._id} item={item}></AllToyCard>
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};
export default AllToys;

