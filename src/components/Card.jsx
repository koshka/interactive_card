import "./Card.scss";

import Word from "./Word.jsx";

const HEARTS = ["🧡", "💛", "💚", "💙", "💜", "❤️"];
const CATS = ["😻", "🙀", "😽", "😸", "😼"];

function Card() {
  return (
    <div className="container">
      <div className="words">
        <Word word="happy" emojies={HEARTS} />
        <Word word="birthday" emojies={HEARTS} />
        <Word word="kotik!" emojies={CATS} />
      </div>
    </div>
  );
}

export default Card;
