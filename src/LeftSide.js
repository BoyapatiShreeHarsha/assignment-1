export default function LeftSide({ titles, handleTitleClick }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h2 style={{ alignSelf: "center" }}>Left Side Section</h2>
      {titles.map((title) => (
        <div
          className="title-container"
          key={title.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {title.name}
          <button onClick={() => handleTitleClick(title)}>&#8594;</button>
        </div>
      ))}
    </div>
  );
}
