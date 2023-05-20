import React, { useEffect, useState } from "react";
import axios from "axios";
import AllToyCard from "./AllToyCard";
import { Container, Table } from "react-bootstrap";

const AllToys = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://legends-toy-universe-server-gitsbyimran.vercel.app/toys"
      );
      const limitedData = response.data.slice(0, 20);
      console.log("API Response:", limitedData);
      setData(limitedData);
      setFilteredData(limitedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredResults = data.filter((item) => {
      console.log("Item:", item);
      const toySearch = item.toyName;
      console.log("Toy Name:", toySearch);
      return (
        toySearch && toySearch.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filteredResults);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Container>
        <h4 className="my-3 text-center">
          Displaying all toys: {filteredData.length}
        </h4>

        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search by toy name"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

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
                filteredData.map((item, index) => (
                  <AllToyCard key={item._id} item={item} index={index} />
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AllToys;
