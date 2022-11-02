import "./App.css";
import Row from "./Row";
import requests from "./requests";
import "./Style/Row.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Banner />
        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTranding} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Commedy Movies" fetchUrl={requests.fetchCommedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      </>
    </div>
  );
}

export default App;
