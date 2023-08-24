import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState } from 'recoil';
import { principalState } from '../../../store/principalStore';

const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;

function P3({ num, setNum }) {
    const [ principal, setPrincipal ] = useRecoilState(principalState);

    const inputRef = useRef();
    // num의 상태가 변하면서 P3가 렌더링이 다시되며 0으로 초기화됨
    // let inputValue = 0;

    const handleInputChange = (e) => {
        // /[^0-9]/g : 숫자가 아닌 문자열만 선택하는 정규식 / replace(/[^0-9]/g, "") 문자열만 ""로 변경
        const value = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = value;
        // if(!!value) {
        //     inputValue = parseInt(value);
        // }
    }
    
    const handleButtonClick = (e) => {
        const { name } = e.target;
        if(name === "plus") {
            setNum( num + parseInt(inputRef.current.value));
        }else {
            setNum( num - parseInt(inputRef.current.value) );
        }
    }

    return (
        <div css={SContainer}>
            <div>userId: {principal.userId}</div>
            <div>username: {principal.username}</div>
            <div>name: {principal.name}</div>
            <div>eamil: {principal.eamil}</div>
            <div>phone: {principal.phone}</div>
            <div></div>
            <input type="text" onChange={handleInputChange} ref={inputRef}/>
            <button name='plus' onClick={handleButtonClick}>증가</button>
            <button name='minus' onClick={handleButtonClick}>감소</button>
        </div>
    );
}

export default P3;