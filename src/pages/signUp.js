import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, FormInput } from '../components/';
import { auth, createDoc } from '../Firebase/firebase'

export const SignUp = () => {
    let history = useHistory();
    const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' })
    const signup = async () => {
        const { email, password, confirmPassword } = user
        if (password === confirmPassword) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { uid } = userCredential.user;
                    createDoc(`users/${uid}`, { email})
                    history.push('/login');
                })
                .catch((error) => {
                    alert(error)
                });
        } else {
            alert("password oor bn")
        }
    }
    return (
        <div>
            <div className='w100 flex justify-end items-center'>
                <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            </div>
            <div className='h100 flex flex-col flex-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>

                <div className='font-lobster c-primary fs-56 lh-70 self-center flex-col'>
                    Boginoo
            </div>
                <h1 className='font-ubuntu fs-32 lh-37 bold header'>Нэвтрэх</h1>
                <FormInput onChange={(e) => setUser({ ...user, email: e.target.value })} label="Цахим хаяг" classname='Input h-5 w-8 no-outline' placeholder='' />
                <FormInput onChange={(e) => setUser({ ...user, password: e.target.value })} label="Нууц үг" classname='Input h-5 w-8 no-outline' type='password' />
                <FormInput onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} label="Нууц үгээ давтна уу?" classname='Input h-5 w-8 no-outline' type='password' />
                <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary br-50 no-outline no-border mt-4" onClick={() => signup()}>Бүртгүүлэх</Button>
            </div>
        </div>
    )
}