import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SnackBar from "./components/UI/SnackBar";
import { uiActions } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();

  const [isBasketVisible, setBasketVisible] = useState(false);

  const snackbar = useSelector((state) => state.ui.snackbar);

  console.log(snackbar);
  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <div>
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
      
    </div>
  );
}

export default App;
const Content = styled.div`
  margin-top: 101px;
`;
