import Snowflakes from "magic-snowflakes";

let ANIMATION;

import "./Balloons.scss";
import { useState } from "react";

function Balloons() {
  const [isFalling, setIsFalling] = useState(false);

  const onToggleAnimation = () => {
    if (!isFalling) {
      ANIMATION = new Snowflakes({
        container: document.querySelector(".app"),
        rotation: false,
      });
    } else {
      ANIMATION.destroy();
    }
    setIsFalling(!isFalling);
  };

  return (
    <div className="balloons">
      <div
        className={`button${isFalling ? " stop" : ""}`}
        onClick={onToggleAnimation}
      >
        {isFalling ? "🙀" : "🎈"}
      </div>
    </div>
  );
}

export default Balloons;
