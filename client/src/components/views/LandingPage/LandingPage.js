import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SliderPage from "../SliderPage/SliderPage";
import ApiPage from "../ApiPage/ApiPage";

const LandingPage = (props) => {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);
  // paging은 App.js에서 라우팅하는 방식으로 해결.
  // main 첫페이지는 헤더와 두개의 컴포넌트로 구성(SliderPage(사진 뜨는), ApiPage(아래 네브바처럼))
  // main 두번째 페이지도 헤더와 두개의 컴포넌트로 구성(추후 회의)
  // axios로 api 불러와놓고

  // const onClickHandler = () => {
  //     axios.get('/api/users/logout').then((response) => {
  //         if (response.data.success) {
  //             props.history.push('/login');
  //         } else {
  //             alert('로그아웃 하는데 실패 했습니다.');
  //         }
  //     });
  // };

  return (
    <>
      {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '20vh',
                }}
            >
                <h1>시작 페이지</h1>
            </div>
            <br /> */}
      <SliderPage />
      <br />
      <br />
      <br />
      <ApiPage
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20vh",
        }}
      />
    </>
  );
};

export default withRouter(LandingPage);
