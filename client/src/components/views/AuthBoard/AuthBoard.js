import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postAuthBoard } from '../../../actions/authBoard_actions';

const AuthBoard = (props) => {
    const dispatch = useDispatch();

    const [Body, setBody] = useState('');
    const [Like, setLike] = useState(null);
    const [Comment, setComment] = useState('');
    const [Photo, setPicture] = useState('');

    useEffect(() => {
        axios
            .get('/api/authboard')
            .then((response) => {
                //console.log(response.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const onBodyHandler = (event) => {
        setBody(event.currentTarget.value);
    };
    const onPhotoHandler = (event) => {
        setPicture(event.currentTarget.value);
    };

    const setBodyClear = () => {
        setBody('');
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            body: Body,
            photo: Photo,
        };

        dispatch(postAuthBoard(body)).then((response) => {
            if (response.payload.postAuthBoard) {
                if (response.payload.postAuthBoard) {
                    props.history.push('/authboard');
                    setBodyClear();
                } else {
                    console.log('post fail!!!');
                    alert('post fail!!! check description and picture!');
                }
            } else {
                console.error('error');
            }
        });
    };

    return (
        <div>
            지키미인증 페이지asdf
            <form onSubmit={onSubmitHandler} encType="multipart/form-data">
                본문 : <input value={Body} onChange={onBodyHandler} />
                파일 업로드 :{' '}
                <input
                    type="file"
                    name="authBoardPicture"
                    value={Photo}
                    onChange={onPhotoHandler}
                />
                {console.log(Photo)}
                <button type="submit">제출 </button>
            </form>
        </div>
    );
};

export default withRouter(AuthBoard);
