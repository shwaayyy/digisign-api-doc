'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import FileBase64 from "@/app/file/[slug]/container/FileBase64";
import SendDoc from "@/app/doc/[slug]/container/Send";
import SignDoc from "@/app/doc/[slug]/container/Sign";


const DocProcess = ({props}) => {
    const [path, setPath] = useState('send')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return (
        <>
            <div className="w-full">
                {path === 'send' ? <SendDoc /> : path === 'sign' ? <SignDoc /> : <SendDoc />}
            </div>
        </>
    )
}

export default DocProcess
