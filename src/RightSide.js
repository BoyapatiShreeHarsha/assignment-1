export default function RightSide({ selectedTitles, isTitleHighlighted }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h2 style={{ alignSelf: "center" }}>Right Side Section</h2>
      {selectedTitles.map((title) => (
        <div
          key={title.name}
          className="title-container"
          style={{
            backgroundColor: isTitleHighlighted(title) ? "yellow" : "inherit",
          }}
        >
          {title.name}
        </div>
      ))}
    </div>
  );
}
