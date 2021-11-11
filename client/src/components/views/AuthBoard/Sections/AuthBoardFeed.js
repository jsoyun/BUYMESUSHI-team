import axios from "axios";
import React, { useEffect } from "react";

const AuthBoardFeed = () => {
    useEffect(() => {
        axios
            .get("/api/authboard")
            .then((response) => {
                //console.log(response.data);
            })
            .catch((err) => console.error(err));
    }, []);
    return <div></div>;
};

export default AuthBoardFeed;
