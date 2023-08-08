'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import SendDoc from "@/app/doc/[slug]/container/Send";
import SignDoc from "@/app/doc/[slug]/container/Sign";
import BulkSign from "@/app/doc/[slug]/container/BulkSign";


const DocProcess = () => {
    const [path, setPath] = useState('send')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return (
        <>
            <div className="w-full">
                {path === 'send' ? <SendDoc /> : path === 'sign' ? <SignDoc /> : path === 'bulk_sign' ? <BulkSign /> : null}
            </div>
        </>
    )
}

export default DocProcess
