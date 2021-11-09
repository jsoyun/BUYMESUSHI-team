import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const LandingPage = (props) => {
    useEffect(() => {
        axios.get('/api/hello').then((response) => console.log(response.data));
    }, []);
    // paging은 App.js에 라우팅한걸로 됐음.
    // main 첫페이지는 헤더와 두개의 컴포넌트로 구성(LandingPage(사진 뜨는), SliderPage(아래 네브바처럼))
    // main 두번째 페이지도 헤더와 두개의 컴포넌트로 구성(추후 회의)
    // axios로 api 불러와놓고


    const onClickHandler = () => {
        axios.get('/api/users/logout').then((response) => {
            if (response.data.success) {
                props.history.push('/login');
            } else {
                alert('로그아웃 하는데 실패 했습니다.');
            }
        });
    };



    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <h1>시작 페이지</h1>
        </div>
    );
};

export default withRouter(LandingPage);
