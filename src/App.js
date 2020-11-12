import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            name,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={name}
              name={name}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              sharee={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
