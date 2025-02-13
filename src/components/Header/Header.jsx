import reactImage from "../../assets/react-core-concepts.png";
const words = ["Crucial", "Fundamental", "Core"];
const getRandomVal = (max) => Math.floor(Math.random() * (max + 1));
import "./Header.css";

export function Header() {
  const word = words[getRandomVal(words.length - 1)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {word} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
