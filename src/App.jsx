import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">Home</Link> |{" "}
        <Link className={styles.link} to="/profile/John">Profilo di John</Link> |{" "}
        <Link className={styles.link} to="/profile/Jane">Profilo di Jane</Link> |{" "}
        <Link className={styles.link} to="/images">Images</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
