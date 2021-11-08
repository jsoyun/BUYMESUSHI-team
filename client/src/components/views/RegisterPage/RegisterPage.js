import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../actions/user_actions';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import TextField from '@material-ui/core/TextField';
// "@mui/material/TextField";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const RegisterPage = (props) => {
    const dispatch = useDispatch();
    // useState 사용
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Name, setName] = useState('');
    const [Nickname, setNickname] = useState('');
    const [Address, setAddress] = useState('');

    // 이벤트 핸들러
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value);
    };
    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }

        let body = {
            email: Email,
            password: Password,
            name: Name,
            nickname: Nickname,
            address: Address,
        };

        dispatch(registerUser(body)).then((response) => {
            if (response.payload.success) {
                // ▼ react 내 페이지 이동 코드
                props.history.push('/login');
            } else {
                alert('Failed to sign up');
            }
        });
    };

    // ▼ 유효성 검사 나열
    // email validation (같은 이메일로 또 가입할수 없고(중복X), 한글은 못 쓰는 등 이메일의 기본 양식을 지켜야 함)
    const emailvalidation = () => {
        const emailRegex =
            /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}/;
        if (Email === '') return true;
        return emailRegex.test(Email);
    };
    // password validation
    const passwordvalidation = () => {
        let check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        if (Password === '') return true;
        return check.test(Password);
    };
    // name validation
    const namevalidation = () => {
        let check = /^[가-힣]{2,7}$/;
        if (Name === '') return true;
        return check.test(Name);
    };
    // nickname validation
    const nicknamevalidation = () => {
        let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
        if (Nickname === '') return false;
        return check.test(Nickname);
    };

    // 리턴값
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
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            회원가입
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={onSubmitHandler}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        value={Email}
                                        onChange={onEmailHandler}
                                        type="text"
                                        variant="standard"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoFocus
                                        error={!emailvalidation()}
                                        helperText={
                                            emailvalidation()
                                                ? ''
                                                : '이메일 양식에 맞게 작성해 주세요.'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={Password}
                                        onChange={onPasswordHandler}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        error={!passwordvalidation()}
                                        helperText={
                                            passwordvalidation()
                                                ? ''
                                                : '특수문자를 포함한 8 ~ 16자를 입력하세요'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={ConfirmPassword}
                                        onChange={onConfirmPasswordHandler}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        error={Password !== ConfirmPassword}
                                        helperText={
                                            Password !== ConfirmPassword
                                                ? '위 비밀번호와 일치하지 않습니다.'
                                                : ''
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={Name}
                                        onChange={onNameHandler}
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        name="Name"
                                        autoComplete="Name"
                                        error={!namevalidation()}
                                        helperText={
                                            namevalidation()
                                                ? ''
                                                : '성과 이름을 포함해 2 ~ 7자 ex)홍길동'
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={Nickname}
                                        onChange={onNicknameHandler}
                                        required
                                        fullWidth
                                        id="nickname"
                                        label="Nickname"
                                        name="nickname"
                                        autoComplete="nickname"
                                        error={nicknamevalidation()}
                                        helperText={
                                            nicknamevalidation()
                                                ? '영어와 숫자로만 입력해주세요.'
                                                : ''
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={Address}
                                        onChange={onAddressHandler}
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        autoComplete="address"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="allowExtraEmails"
                                                color="primary"
                                            />
                                        }
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
};

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                UsEarth
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default withRouter(RegisterPage);
