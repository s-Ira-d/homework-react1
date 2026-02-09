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
          "https://www.google.com/imgres?q=picture%20cat&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F050%2F393%2F628%2Fsmall%2Fcute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fcute-baby-cat&docid=D1iDE6e2fSZX2M&tbnid=xoQ_yEPKt1EM1M&vet=12ahUKEwjwguuhis2SAxXSGhAIHcI7B2MQnPAOegQIJhAB..i&w=700&h=350&hcb=2&ved=2ahUKEwjwguuhis2SAxXSGhAIHcI7B2MQnPAOegQIJhAB"
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
