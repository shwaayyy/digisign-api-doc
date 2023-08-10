'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import FileBase64 from "@/app/download/[slug]/container/FileBase64";
import FileDownload from "@/app/download/[slug]/container/File";
import {LoadingOutlined} from "@ant-design/icons";
import Template from "@/components/Template";

const Download = () => {
    const [path, setPath] = useState('/')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return path === 'file_download' ? <FileDownload/> : path === 'base64' ? <FileBase64/> : <Template>
        <div className={'w-full h-full flex justify-center items-center'}><LoadingOutlined className={'text-7xl'}/></div>
    </Template>
}

export default Download
