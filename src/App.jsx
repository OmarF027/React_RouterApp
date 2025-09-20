import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile/John">Profilo di John</Link> |{" "}
        <Link to="/profile/Jane">Profilo di Jane</Link> |{" "}
        <Link to="/images">Images</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
