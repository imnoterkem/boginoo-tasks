import { Button } from './';
import { useHistory } from 'react-router-dom'
import React, {useContext} from 'react';
import { AuthContext } from '../Provider/provider'
import {auth} from '../Firebase/firebase'

export const Navigation = (props) => {
    let history = useHistory();
    let user = useContext(AuthContext);
    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {
                user.userReady? <div onClick={()=>{auth.signOut().then(history.push('/login'))}}>{user.email}</div> :
                <Button className='br-70 no-border font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={() => history.push("/login")}>Нэвтрэх</Button>
            }
        </div>
    );
};