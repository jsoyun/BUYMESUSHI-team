import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Post from "./Sections/Post";

const AuthBoard = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("/api/authboard")
            .then((response) => {
                //console.log(response.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return <Post />;
};

export default withRouter(AuthBoard);
