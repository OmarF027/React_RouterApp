import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Pagina non trovata!</h1>
      <Link to="/">Torna alla Home</Link>
    </div>
  );
};

export default ErrorPage;
