
import { useEffect, useState } from "react";

interface Config {
  name: string;
  message: string;
  backgroundImage: string;
  video: string;
  music: string;
}

function App() {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get("user") || "lanlee";
    fetch(`/users/${user}/config.json`)
      .then(res => res.json())
      .then(setConfig);
  }, []);

  if (!config) return <div className="text-center text-white">Loading...</div>;

  return (
    <div
      className="w-screen h-screen text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(/users/${config.name.toLowerCase()}/${config.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl font-bold mb-4">Happy Birthday, {config.name}!</h1>
      <p className="text-xl">{config.message}</p>
      <audio controls autoPlay loop className="mt-4">
        <source src={`/users/${config.name.toLowerCase()}/${config.music}`} type="audio/mpeg" />
      </audio>
      <video autoPlay muted loop width={320} className="mt-4">
        <source src={`/users/${config.name.toLowerCase()}/${config.video}`} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
