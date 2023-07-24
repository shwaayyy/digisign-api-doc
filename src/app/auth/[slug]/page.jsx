'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Register from "@/app/auth/[slug]/container/Reg";
import Activation from "@/app/auth/[slug]/container/Act";


const DocProcess = ({props}) => {
    const [path, setPath] = useState('register')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return (
        <>
            <div className="w-full">
                {path === 'register' ? <Register /> : path === 'activation' ? <Activation /> : <Register />}
            </div>
        </>
    )
}

export default DocProcess
