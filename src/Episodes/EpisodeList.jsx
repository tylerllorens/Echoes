import "./EpisodeList.css";

export default function EpisodeList({ episodeList, setSelectedEpisode }) {
  return (
    <section className="episode-list">
      <h2>Episodes:</h2>
      <ul>
        {episodeList.map((episode) => (
          <li
            key={episode.id}
            onClick={() => {
              setSelectedEpisode(episode);
            }}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
