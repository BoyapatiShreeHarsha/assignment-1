export default function NavBar({ children }) {
  return (
    <div className="navbar">
      {children}
      <a href="/">Logo</a>
    </div>
  );
}
