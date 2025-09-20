import { useState, useEffect } from "react";

const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Usiamo Picsum Photos per immagini garantite
    fetch("https://picsum.photos/v2/list?page=1&limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setImages(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <h1>Fetched Images</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img) => (
          <img
            key={img.id}
            src={`https://picsum.photos/id/${img.id}/200/200`}
            alt={img.author}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
