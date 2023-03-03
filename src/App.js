import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import styled, { createGlobalStyle } from "styled-components";
import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SnackBar from "./components/UI/SnackBar";
import { uiActions } from "./store/uiSlice";
import { darkTheme, lightTheme } from "./lib/constants/theme";

function App() {
  const dispatch = useDispatch();

  const [isBasketVisible, setBasketVisible] = useState(false);

  const snackbar = useSelector((state) => state.ui.snackbar);
  const themeMode = useSelector((state) => state.ui.themeMode);

  // console.log(snackbar);
  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === "light" ? { ...lightTheme } : { ...darkTheme };

    return createTheme(currentTheme);
  }, [themeMode]);

  const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: ${theme.palette.primary.dark};
  }
  `;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          <Basket open={isBasketVisible} onClose={showBasketHandler} />
        </Content>
        <SnackBar
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          massage={snackbar.massage}
          autoHideDuration={4000}
          onClose={() => dispatch(uiActions.closeSnackbar())}
        />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
const Content = styled.div`
  margin-top: 101px;
`;
