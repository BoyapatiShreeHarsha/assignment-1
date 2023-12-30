import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Main from "./Main";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
// import axios from "axios";

const tempTitles = [{ name: "Hello" }, { name: "Hi" }, { name: "Bye" }];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [titles, setTitles] = useState(tempTitles);
  const [selectedTitles, setSelectedTitles] = useState([]);

  // useEffect(() => {
  //   // Fetch titles from the backend API
  //   const fetchTitles = async () => {
  //     try {
  //       const response = await axios.get("/api/titles"); // Replace with your API endpoint
  //       setTitles(response.data);
  //     } catch (error) {
  //       console.error("Error fetching titles:", error);
  //     }
  //   };

  //   fetchTitles();
  // }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTitleClick = (clickedTitle) => {
    const newTitles = titles.filter(
      (title) => title.name !== clickedTitle.name
    );
    setTitles(newTitles);
    setSelectedTitles([...selectedTitles, clickedTitle]);
  };

  //doubt in this function
  const isTitleHighlighted = (title) => {
    console.log(selectedTitles);
    selectedTitles.some((selected) =>
      title.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar>
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      </NavBar>
      <Main>
        <LeftSide titles={titles} handleTitleClick={handleTitleClick} />
        <RightSide
          selectedTitles={selectedTitles}
          isTitleHighlighted={isTitleHighlighted}
        />
      </Main>
    </div>
  );
};

export default App;
