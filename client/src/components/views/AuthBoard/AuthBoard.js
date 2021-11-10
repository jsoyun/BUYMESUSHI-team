import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const AuthBoard = () => {
    const dispatch = useDispatch();

    const [Body, setBody] = useState('');
    const [Like, setLike] = useState();
    const [Comment, setComment] = useState('');

    useEffect(() => {
        axios
            .get('/api/authboard')
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            body: Body,
        };

        //dispatch(postAuthBoard(body).then((response) => {}));
    };

    return <div>지키미인증 페이지asdf </div>;
};

export default AuthBoard;
