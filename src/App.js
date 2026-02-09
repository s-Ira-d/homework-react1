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

  const colors = ["червоний", "синій", "зелений"];

  return (
    <div className="App">
      <h1>{myName}</h1>

      <p>ласкаво просимо до нашого сайту!</p>

      <img
        src={
          "https://www.google.com/imgres?q=react&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F30%2FReact_Logo_SVG.svg&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2FReact&docid=uDQPDMqXXQYhqM&tbnid=1YRCTmBnER_nsM&vet=12ahUKEwi9_I2z_cySAxWvPxAIHZqjDnEQnPAOegQIIBAB..i&w=800&h=728&hcb=2&ved=2ahUKEwi9_I2z_cySAxWvPxAIHZqjDnEQnPAOegQIIBAB"
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
