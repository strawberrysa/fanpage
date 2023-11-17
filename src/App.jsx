import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { useState, useContext } from "react";
import Message from "./components/Message";
import Background from "./components/Background";
import InputContainer from "./components/InputContainer";
import { CardWrap } from "./components/Stylecomponents";
import Footer from "./components/Footer";
import { MessageContextData } from "./context/Context";

function App() {
  const [curmember, setCurmember] = useState("모두🐰");
  const { message, setMessage } = useContext(MessageContextData);

  return (
    <>
      <Wrap>
        <GlobalStyle />
        <Background setCurmember={setCurmember} />
        <CardWrap>
          <InputContainer />
        </CardWrap>
        <Message curmember={curmember} />
      </Wrap>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
`;
