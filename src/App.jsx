import "./index.css";
import EpisodeList from "./Episodes/EpisodeList";
import EpisodeDetails from "./Episodes/EpisodeDetails";
import { useState } from "react";
import { episodeList } from "./data";
export default function App() {
  // TODO
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [episodes, setEpisodeList] = useState(episodeList);
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList
          episodeList={episodes}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
