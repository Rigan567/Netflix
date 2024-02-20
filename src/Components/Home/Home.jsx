import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const apiKey = "ec33686266287a4e1a7736fb1dbd2b94";
const url = "https://api.themoviedb.org/3/movie";
const imgUrl = "https://image.tmdb.org/t/p/original";
const urlGenre = "https://api.themoviedb.org/3/genre/movie/list?";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    fetchUpcoming();

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}&page=2`);
      setNowPlayingMovies(results);
    };

    fetchNowPlaying();

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    fetchPopular();

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };
    fetchTopRated();

    const fetchGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${urlGenre}api_key=${apiKey}`);
      setGenre(genres);
    };
    fetchGenre();
  }, []);

  {
    var random = Math.floor(Math.random() * 20);
  }

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: nowPlayingMovies[random]
            ? `url(${`${imgUrl}/${nowPlayingMovies[random].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {nowPlayingMovies[random] && (
          <h1>{nowPlayingMovies[random].original_title}</h1>
        )}
        {nowPlayingMovies[random] && <p>{nowPlayingMovies[random].overview}</p>}

        <div>
          <button>
            <CiPlay1 />
            Play
          </button>
          <button>
            My List <CiCirclePlus />
          </button>
        </div>
      </div>
      <Row title={"Upcoming "} arr={upcomingMovies} />
      <Row title={"Now Playing "} arr={nowPlayingMovies} />
      <Row title={"Popular "} arr={popularMovies} />
      <Row title={"Top Rated "} arr={topRatedMovies} />

      <div className="genreBox">
        {genre.map((item, index) => {
          return (
            <Link key={index} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
