import React from "react";
import "./App.css";
import Row from "./components/Row";
import request from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        isLarge
        title="Netfilx Originals"
        fetchUrl={request.fetchNetflixOrginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentriesMovies} />
    </div>
  );
}

export default App;
