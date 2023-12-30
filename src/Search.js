export default function Search({ searchTerm, handleSearch }) {
  return (
    <input
      style={{ alignSelf: "center" }}
      className="search-input"
      type="text"
      placeholder="Search titles..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}
