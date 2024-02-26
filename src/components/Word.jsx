import { Fragment, useState } from "react";
import { LETTERS } from "../letters";
import "./Card.scss";

function Letter({ letter, emojies }) {
  const [cellsMap, setCellsMap] = useState(new Map());

  const gridCells = letter.map((row) => row.split(""));
  const columnsNum = gridCells[0].length;
  const gridStyle = {
    gridTemplateColumns: `repeat(${columnsNum}, 1vw)`,
  };

  const fill = () => {
    const newMap = new Map(cellsMap);
    for (let i = 0; i < gridCells.length; i++) {
      gridCells[i].forEach((cell, j) => {
        const key = `${i}-${j}`;
        if (cell === "1") {
          const randomHeart =
            emojies[Math.floor(Math.random() * emojies.length)];
          newMap.set(key, randomHeart);
          setCellsMap(newMap);
        }
      });
      setCellsMap(newMap);
    }
  };

  return (
    <div className="letter-grid" style={gridStyle} onClick={fill}>
      {gridCells.map((row, rowIndex) => {
        return (
          <Fragment key={rowIndex}>
            {row.map((cell, colIndex) => {
              const key = `${rowIndex}-${colIndex}`;
              return (
                <div
                  className="grid-cell"
                  key={key}
                  onMouseEnter={() => {
                    if (cell !== "1") {
                      return;
                    }
                    const randomHeart =
                      emojies[Math.floor(Math.random() * emojies.length)];
                    const newMap = new Map(cellsMap);
                    newMap.set(key, randomHeart);
                    setCellsMap(newMap);
                  }}
                >
                  {cell === "0" ? null : cellsMap.get(key) ?? "🖤"}
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}

function Word({ word, emojies }) {
  return (
    <div className="word">
      {word.split("").map((letter, letterInd) => {
        if (LETTERS[letter] == null) {
          return null;
        }
        return (
          <Letter
            key={`${letter}-${letterInd}`}
            emojies={emojies}
            letter={LETTERS[letter]}
          />
        );
      })}
    </div>
  );
}

export default Word;
