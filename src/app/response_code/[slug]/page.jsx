'use client'
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import HTMLResCodePage from "@/app/response_code/[slug]/container/HtmlCode";
import APIResCodePage from "@/app/response_code/[slug]/container/ApiCode";

const ResCode = () => {
    const [path, setPath] = useState('api')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return path === 'html' ? <HTMLResCodePage /> : path === 'api' ? <APIResCodePage /> : <HTMLResCodePage />
}

export default ResCode
