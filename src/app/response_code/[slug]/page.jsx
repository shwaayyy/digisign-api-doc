'use client'
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import HTMLResCodePage from "@/app/response_code/[slug]/container/HtmlCode";
import APIResCodePage from "@/app/response_code/[slug]/container/ApiCode";
import {LoadingOutlined} from "@ant-design/icons";
import Template from "@/components/Template";

const ResCode = () => {
    const [path, setPath] = useState('/')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return path === 'html' ? <HTMLResCodePage /> : path === 'api' ? <APIResCodePage /> : <Template>
        <div className={'w-full h-full flex justify-center items-center'}><LoadingOutlined className={'text-7xl'}/></div>
    </Template>
}

export default ResCode
