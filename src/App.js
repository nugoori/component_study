import './App.css';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Reset } from 'styled-reset';
import { GSCommon } from './styles/common';
import { Link, Route, Routes } from 'react-router-dom';
import APage from './pages/APage/APage';
import BPage from './pages/BPage/BPage';
import { useState } from 'react';
import CPage from './pages/CPage/CPage';
import Principal from './components/Principal2/Principal';

const SHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #777;
`;

const SContainer = css`
  margin: 0px auto; // flex없어도~ 가운데 정렬
  width: 1170px;
  background-color: #bbb;
`;

function App() {
  // props를 구조분해 해서 넣으면 component에서 넘겨줄 때 props로 받아야 할 값을 자동완성으로 볼 수 있음
  
  // html태그를?(JSX를?) 값으로 만들어 매개변수로 전달도 가능?

  const [ header, setHeader ] = useState("Header");

  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      <div>
        <div css={SHeader}>
          {header}
          <div>
            <Link to={ "/a" } >A페이지</Link>
            <Link to={ "/b" } >B페이지</Link>
            <Link to={ "/c" } >C페이지</Link>
          </div>
        </div>
          <div css={SContainer}>
            <Routes >
              <Route path='/a' element={ <APage />} />
              <Route path='/b' element={ <BPage setHeader={setHeader} /> } />
              <Route path='/c' element={ <CPage />} />
              <Route path='/p' element={ <Principal />} />
            </Routes>
          </div>
      </div>
    </>
  );
}

export default App;
