'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import FileBase64 from "@/app/download/[slug]/container/FileBase64";
import FileDownload from "@/app/download/[slug]/container/File";

const APIFile = () => {
    const [path, setPath] = useState('file_download')
    const params = usePathname()

    useEffect(() => {
        const pathName = params.split("/")
        setPath(pathName[pathName.length - 1])
    }, [])

    return (
        <>
            <div className="w-full">
                {path === 'file_download' ? <FileDownload /> : path === 'base64' ? <FileBase64 /> : <FileDownload />}
            </div>
        </>
    )
}

export default APIFile
