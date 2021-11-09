import axios from "axios";
import React, { useEffect } from "react";

const AuthBoard = () => {
    useEffect(() => {
        axios
            .get("/api/authboard")
            .then((response) => console.log(response.data))
            .catch((err) => console.error(err));
    }, []);
    return <div>지키미asdasd인증 페이지 </div>;
};

export default AuthBoard;
