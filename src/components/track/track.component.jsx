import "./track.styles.css";


export default function TrackComponent({ image, title, artist }) {
  return (
    <div className="song">
      <div className="song-img">
        <img src={image} alt="logo" />
      </div>
      <div className="song-desc">
        <p>{title}</p>
        <p>{artist}</p>
        <button className="button-song">
        
          Select
        </button>
      </div>
    </div>
  );
}
