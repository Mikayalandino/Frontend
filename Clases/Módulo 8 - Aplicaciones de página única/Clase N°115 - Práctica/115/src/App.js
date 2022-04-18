const urlApi =
  "https://api.themoviedb.org/3/movie/550?api_key=e25295b648c3ef3c3b8c8c319786e4fb";

const array = ["Mia", "Batman", "Tokio"];

// REACT FRAGMENT

const App = () => {
  return (
    <>
      {array.map((persona) => (
        <>
          <div></div>
          <div></div>
        </>
      ))}
    </>
  );
};

export default App;
