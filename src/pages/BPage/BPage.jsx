import React, { useRef, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

// props로 함수를 넘겨받을 수도 있음
function BPage({ setHeader }) {
    const menus = [ 
        {
            id: 1,
            name: "내 계정 정보"
        },
        {
            id: 2,
            name: "비밀번호 변경"
        },
        {
            id: 3,
            name: "이메일 인증 또는 변경"
        },
        {
            id: 4,
            name: "계정 업그레이드"
        }
    ];

    let [ content, setContent ] = useState("기본값");

    let inputText = "";

    const inputRef = useRef();

    const handleOkClick = () => {
        // console.log(document.querySelector("input").value);
        // console.log(inputRef.current.value);
        setHeader(inputText);
    }
    const handleInputOnChange = (e) => {
        inputText = e.target.value;
    }

    return (
        <MainLayout title={"B페이지"} menus={menus} >
            <div>
                <h1>{content}</h1>
                {/* useRef / onChange */}
                <input type="text" onChange={handleInputOnChange} ref={inputRef} />
                <button onClick={handleOkClick}>확인</button>
            </div>
        </MainLayout>
    );
}

export default BPage;