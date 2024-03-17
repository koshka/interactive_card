import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import Balloons from "./components/Balloons";
import Card from "./components/Card";
import { useState } from "react";

const LOCAL_STORAGE_KEY_CODE = "code";
const CODE = "42";
const EMPTY_STRING = "";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const localStorageCode = localStorage.getItem(LOCAL_STORAGE_KEY_CODE);
  const initValue = localStorageCode == CODE ? localStorageCode : EMPTY_STRING;
  const [code, setCode] = useState(initValue);
  const [isCardShown, setCardShown] = useState(initValue == CODE);

  const onChange = (event) => {
    setCode(event.target.value);
  };

  const onClick = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_CODE, code);
    setCardShown(true);
  };

  const onExitClick = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY_CODE);
    setCode(EMPTY_STRING);
    setCardShown(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={`app${isCardShown ? " card-mode" : ""}`}>
        {!isCardShown ? (
          <div className="init-screen">
            <TextField
              id="outlined-basic"
              label="Code?"
              variant="outlined"
              value={code}
              onChange={onChange}
              sx={{ input: { color: "white" }, "margin-bottom": "20px" }}
            />
            <Button
              onClick={onClick}
              disabled={code != CODE}
              variant="contained"
              color="secondary"
              sx={{ button: { position: "absolute", bottom: 0, right: 0 } }}
            >
              Open card 🎉
            </Button>
          </div>
        ) : (
          <>
            <Card />
            <Balloons />
            <Button
              className="exit-button"
              color="secondary"
              onClick={onExitClick}
            >
              <span className="exit-button-text">👋</span>
            </Button>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
