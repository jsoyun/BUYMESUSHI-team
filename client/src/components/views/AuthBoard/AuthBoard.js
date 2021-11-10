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
    const [Photo, setPhoto] = useState('');

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
        setPhoto(event.currentTarget.value);
    };

    const setBodyClear = () => {
        setBody('');
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // var newPath = Photo.replace('C:\\fakepath\\', '');
        // console.log(newPath);

        let form = document.getElementById('authBoardPhoto');
        let formData = new FormData(form);
        let body = {
            body: Body,
            photo: Photo,
        };

        //        console.log(Photo);
        dispatch(postAuthBoard(body)).then((response) => {
            //console.log(response);
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
            <form
                onSubmit={onSubmitHandler}
                encType="multipart/form-data"
                id="authBoardPhoto"
            >
                본문 : <input value={Body} onChange={onBodyHandler} />
                파일 업로드 :
                <input
                    type="file"
                    name="authBoardPhoto"
                    value={Photo}
                    onChange={onPhotoHandler}
                />
                <button type="submit">제출 </button>
            </form>
        </div>
    );
};

export default withRouter(AuthBoard);
