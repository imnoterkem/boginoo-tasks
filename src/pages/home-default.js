import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, Shorten } from '../components/';
import { useCollection } from '../Firebase/useCollection'
import { AuthContext } from '../Provider/provider';

export const HomeDefault = () => {

    const [link, setLink] = useState('')
    const { email } = useContext(AuthContext)
    const { data, createDoc } = useCollection('shortened_urls', email);
    const history=useHistory()

    const Shorten = () => {
        if (link === '') return;
        let r = Math.random().toString(36).substring(7);

        createDoc({link, r});
        setLink('');
    }


    return (
        <Layout>
            <div className='h100 flex flex-col flex-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>

                <div className='font-lobster c-primary fs-56 lh-70 self-center flex-col'>
                    Boginoo
                </div>


                <div className='mt-5 flex justify-center items-center'>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder='https://www.web-huudas.mn' className={"no-border box-shadow no-outline h-5 w-9 c-primary mt-3"} />
                    <Button onClick={() => Shorten()} className={"no-outline tt-u ml-4 br-70 no-border font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary"}>Богиносгох</Button>

                </div>
                <div className='mt-5 flex-column justify-center, items-center'>
                    {
                        data.map(d=><div className='Data'>
                            <div>{d.r}</div>
                            <a onClick={()=>history.push(d.s)} className='ml-3 c-primary' >{d.s}</a>
                        </div>)
                    }
                </div>
            </div>
        </Layout>
    )
}