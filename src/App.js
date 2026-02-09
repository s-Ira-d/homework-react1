import "./App.css";

function App() {
  const myName = "Іра";

  const myFavoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };

  const num1 = 3;
  const num2 = 27;
  const sum = num1 + num2;

  const colors = ["purple", "green", "yellow"];

  return (
    <div className="App">
      <h1>{myName}</h1>

      <p>ласкаво просимо до нашого сайту!</p>

      <img
        src={
          "https://i.pinimg.com/1200x/ac/e4/d6/ace4d6b62d8a204bbcbe4c747f616fd8.jpg"
        }
        alt={"example"}
      />

      <p>
        улюблений сайт: <a href={myFavoriteSite.url}>{myFavoriteSite.name}</a>
      </p>

      <p>
        сума {num1} + {num2} = {sum}
      </p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
