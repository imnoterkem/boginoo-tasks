import React, {useState} from 'react'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, FormInput } from '../components/';
import {useHistory} from 'react-router-dom'
import {auth} from '../Firebase/firebase'

export const Login = () => {
    let history=useHistory()
    const [user, setUser]=useState({email:'', password:''})
    const set=(e)=>{
        setUser({...user, [e.target.id]:e.target.value});
    }
    const signIn=()=>{
        let {email, password}=user
        auth.signInWithEmailAndPassword(email, password).then((u)=>{
            history.push('')
        }).catch(error=>alert(error))
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
                <FormInput label="Цахим хаяг" classname='Input h-5 w-8 no-outline' placeholder='/* name@mail.domain */' id='email' onChange={set}/>
                <FormInput label="Нууц үг" classname='Input h-5 w-8 no-outline' type='password' id='password' onChange={set}/>
                <Button onClick={()=>signIn()} className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary br-50 no-outline no-border mt-4">Нэвтрэх</Button>
                <a className='aTag' onClick={()=>history.push('/signup')}>Шинэ хэрэглэгч бол энд дарна уу?</a>
            </div>
        </div>
    )
}