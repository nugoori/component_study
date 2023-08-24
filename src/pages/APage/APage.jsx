import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function APage(props) {
    const menus = [ 
        {
            id: 1,
            name: "나의 프로젝트"
        },
        {
            id: 2,
            name: "나에게 공유된 프로젝트"
        }
    ];

    const [ result, setResult ] = useState(0);
    
    const [ inputValueObjs, setInputValueObjs ] = useState({
        firstNum: 0,
        secondNum: 0
    });

    const [ name, setName ] = useState("");

    // 페이지가 처음 렌더링될때, 안에있는 inputValueObjs가 변할 때마다 실행
    useEffect(() => {
        console.log("useEffect실행");
        calc(inputValueObjs.firstNum, inputValueObjs.secondNum);
        // calc(10, 20);
        return () => {
            console.log("어마운트")
        };
    // 첫번째마운트함수엔 함수, 두번째변수엔 배열[] (= dependency) 에는 상태를 넣을 수 있음 / depc에 상태가 존재하면 useEffect내의 함수가 그 상태에 의존
    }, [inputValueObjs, name]);

    const calc = (x, y) => {
        setResult(x + y);
    }

    const handleInputChange = (e) => {
        setInputValueObjs({
            ...inputValueObjs,
            // js에서는 []안에 객체의 ~를 넣으면 객체의 키값으로 인식
            [e.target.name]: parseInt(e.target.value)
        })
    }

    const handleNameInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <MainLayout title={"A페이지"} menus={menus}  >
            <div>{result}</div>
            <div>{name}</div>
            <div>
                <input type="text" name='firstNum' onChange={handleInputChange} placeholder='1번 값' />
                <input type="text" name='secondNum' onChange={handleInputChange} placeholder='2번 값' />
                <input type="text" name='name' onChange={handleNameInputChange} placeholder='이름' />
            </div>
        </MainLayout >
    );
}

export default APage;