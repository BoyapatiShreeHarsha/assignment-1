import React, { useState, useEffect } from "react";
import axios from "axios";

const tempTitles = [{ name: "Hello" }, { name: "Hi" }, { name: "Bye" }];

const App = () => {
  const [titles, setTitles] = useState(tempTitles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTitles, setSelectedTitles] = useState([]);

  useEffect(() => {
    // Fetch titles from the backend API
    const fetchTitles = async () => {
      try {
        const response = await axios.get("/api/titles"); // Replace with your API endpoint
        setTitles(response.data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    fetchTitles();
  }, []);

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

  const handleSelectedTitleClick = (clickedTitle) => {
    const newSelectedTitles = selectedTitles.filter(
      (title) => title.name !== clickedTitle.name
    );
    setSelectedTitles(newSelectedTitles);
    setTitles([...titles, clickedTitle]);
  };

  const filteredTitles = titles.filter((title) =>
    title.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isTitleSelected = (title) => {
    return selectedTitles.some((selected) => selected.name === title.name);
  };

  const isTitleHighlighted = (title) => {
    return (
      isTitleSelected(title) &&
      title.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search titles..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="flex-container">
        <div className="section">
          <h2>Left Side Section</h2>
          {filteredTitles.map((title) => (
            <div
              key={title.name}
              onClick={() => handleTitleClick(title)}
              className={`title`}
            >
              {title.name}
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Right Side Section</h2>
          {selectedTitles.map((title) => (
            <div
              key={title.name}
              onClick={() => handleSelectedTitleClick(title)}
              className={`title ${
                isTitleHighlighted(title) ? "highlighted" : ""
              }`}
            >
              {title.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
