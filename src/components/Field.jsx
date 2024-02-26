import "./Field.scss";

import Word from "./Word.jsx";

const HEARTS = ["🧡", "💛", "💚", "💙", "💜", "❤️"];
const CATS = ["😻", "🙀", "😽", "😸", "😼"];

function Field() {
  return (
    <div className="field">
      <div className="words">
        <Word word="happy" emojies={HEARTS} />
        <Word word="birthday" emojies={HEARTS} />
        <Word word="kotik!" emojies={CATS} />
      </div>
    </div>
  );
}

export default Field;
