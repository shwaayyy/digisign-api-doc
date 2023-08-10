'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Register from "@/app/auth/[slug]/container/Reg";
import Activation from "@/app/auth/[slug]/container/Act";
import {LoadingOutlined} from "@ant-design/icons";
import Template from "@/components/Template";


const Auth = () => {
    const [path, setPath] = useState('/')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return path === 'register' ? <Register/> : path === 'activation' ? <Activation/> :
        <Template>
            <div className={'w-full h-full flex justify-center items-center'}><LoadingOutlined className={'text-7xl'}/></div>
        </Template>
}

export default Auth
