'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import SendDoc from "@/app/doc/[slug]/container/Send";
import SignDoc from "@/app/doc/[slug]/container/Sign";
import BulkSign from "@/app/doc/[slug]/container/BulkSign";
import {LoadingOutlined} from "@ant-design/icons";
import Template from "@/components/Template";


const DocProcess = () => {
    const [path, setPath] = useState('/')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return path === 'send' ? <SendDoc/> : path === 'sign' ? <SignDoc/> : path === 'bulk_sign' ? <BulkSign/> :
        <Template>
            <div className={'w-full h-full flex justify-center items-center'}><LoadingOutlined className={'text-7xl'}/></div>
        </Template>
}

export default DocProcess
