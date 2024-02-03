import { useState } from "react";
import "./App.css";

const phrases = [
  "NO",
  "TA AYAW AH",
  "SIGI NA BOIEIEIE",
  "DAMOT NAMAN",
  "AS A FRIEND LANG NAMAN AY",
  "KUNAT MO NAMAN HMP",
  "HJAHAHAHAHAH INIS",
  "DI TALAGA PWEDE MAG NO",
  "TIGNAN MO YUNG YES LUMALAKE",
  "HAHAHAHAHAHAHHA",
  "NO",
  "TA AYAW AH",
  "SIGI NA BOIEIEIE",
  "DAMOT NAMAN",
  "AS A FRIEND LANG NAMAN AY",
  "KUNAT MO NAMAN HMP",
  "HJAHAHAHAHAH INIS",
  "DI TALAGA PWEDE MAG NO",
  "TIGNAN MO YUNG YES LUMALAKE",
  "HAHAHAHAHAHAHHA",
  "NO",
  "TA AYAW AH",
  "SIGI NA BOIEIEIE",
  "DAMOT NAMAN",
  "AS A FRIEND LANG NAMAN AY",
  "KUNAT MO NAMAN HMP",
  "HJAHAHAHAHAH INIS",
  "DI TALAGA PWEDE MAG NO",
  "TIGNAN MO YUNG YES LUMALAKE",
  "HAHAHAHAHAHAHHA",
];

function App() {
  const [noCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media1.tenor.com/m/u1OqA3bNXyQAAAAC/hi-waving.gif"
          />
          <div
            style={{
              fontSize: "27px",
              fontFamily: "Verdana, sans-serif",
              fontWeight: "bold",
            }}
            className="text"
          >
            YUNAY BIGWASAN KITA AT HAHAHAHAHA
          </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-donkey-shrek-prj7v6q9sqwlsz7k.gif"
          />

          <div
            style={{
              fontSize: "27px",
              fontFamily: "Verdana, sans-serif",
              fontWeight: "bold",
            }}
          >
            HOY DATE TAYO SA FEBRUARY 14!
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
