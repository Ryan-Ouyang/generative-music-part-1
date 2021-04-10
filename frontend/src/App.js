import React, { useState } from "react";
import { RandomReveal } from "react-random-reveal";

function App() {
  const [hash, setHash] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const getHash = async () => {
    const fetchData = async () => {
      return await fetch(`${process.env.REACT_APP_BACKEND_URL}/hash`);
    };

    const response = await fetchData();
    const data = await response.json();
    setHash(data.hash);
    setIsPlaying(true);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1>Generative Music V1</h1>
          <p>Click the below button to generate your unique hash:</p>
          <button onClick={() => getHash()}>Get my hash!</button>

          <div className="hashContainer">
            <span style={{ display: isPlaying && "none" }}>
              0x000000000000000000000000000000000000000000000000000
            </span>
            <RandomReveal
              isPlaying={isPlaying}
              duration={3}
              revealDuration={0.7}
              characters={hash}
            />
          </div>

          <span
            style={{
              display: !isPlaying && hash ? "unset" : "none",
              color: "white",
            }}
          >
            Done!
          </span>
        </div>
      </div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <style jsx>{`
        body {
          background-color: #282c34;
        }

        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100vh;
          width: 100vw;
        }

        .container {
          display: block;

          min-width: 700px;
          padding: 0 25px 10px;

          border-radius: 30px;
          border: 2px solid #61dafb;

          margin: auto;
        }

        h1 {
          color: ${Color.mainText};
        }

        p {
          color: ${Color.mainText};
        }

        button {
          display: block;
          margin: 0 auto;

          background-color: #61dafb;

          border: 0;
          outline: 0;

          border-radius: 5px;
          color: black;

          padding: 10px 20px;
        }

        .hashContainer {
          margin-top: 20px;

          border-radius: 5px;
          background-color: white;
          padding: 5px;
          text-align: center;
        }

        .hashContainer > p {
          color: black;
        }
      `}</style>
    </div>
  );
}

const Color = {
  mainText: "#cccccc",
};

export default App;
