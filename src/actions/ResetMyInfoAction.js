import ResetMyInfoScreen from '../screens/ResetMyInfoScreen';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
export default ResetMyInfoAction = (props) => {
    const [err, setErr] = useState('');

    const findPassword = (email) => {
        var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if(!email) {
            setErr('이메일을 입력해주세요.');
            return false;
        } else if(!emailReg.test(email)) {
            setErr('이메일 형식을 올바르게 입력해주세요.');
            return false;
        } else {
            auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                setErr('비밀번호 재설정 메일을 전송하였습니다.');
                
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    setErr("이메일이 유효하지 않습니다.");
                } 
                if (error.code === 'auth/user-not-found') {
                    setErr("존재하지 않는 아이디입니다.");
                } 
                if (error.code == 'auth/too-many-requests'){
                    setErr("너무 많은 이메일이 요청되었습니다.");
                }
            });

            Alert.alert(
                "비밀번호 전송",
                "비밀번호를 작성하신 메일로 전송하였습니다.\n링크를 통해 비밀번호를 재설정 하세요.",
                [{
                    text: "확인",
                    
                    style: "cancel",
                }],
            );
        }
    }
    return <ResetMyInfoScreen err={err} findPassword={findPassword}/>
}