import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";

export default function MovieCard({ inWatchlist, updateWatchlist, Poster, Title, Metascore, Year, Runtime, Genre, imdbID, Plot }) {
  function posterControl(Poster) {
    return Poster === 'N/A' ? './public/assets/images/poster-placeholder.png' : Poster;
  }

  return (
    <div className='movie-card'>
      <img src={posterControl(Poster)} alt="" className="movie-card__poster" />
      <div className="u-info">
        <div className="u-heading">
          <h3 className="movie-card__title">{Title}</h3>
          <div className="u-rating">
            <svg className="movie-card__star-icon" width="18" height="18" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654" />
            </svg>
            <p className="movie-card__score">{Metascore}</p>
          </div>
        </div>
        <div className="u-subheading">
          <p className="movie-card__year">{Year}</p>
          <span> • </span>
          <p className="movie-card__length">{Runtime}</p>
          <span> • </span>
          <p className="movie-card__genre">{Genre}</p>
        </div>
        <p className="movie-card__plot">{Plot}</p>
      </div>
      {inWatchlist ? 
        <ButtonRemove imdbID={imdbID} updateWatchlist={updateWatchlist} /> :
        <ButtonAdd imdbID={imdbID} updateWatchlist={updateWatchlist} />
      }
    </div>
  );
}
