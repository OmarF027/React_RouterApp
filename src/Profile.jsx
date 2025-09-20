import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();
  return <h1>Profilo di {name || "Nessun nome"}</h1>;
};

export default Profile;
