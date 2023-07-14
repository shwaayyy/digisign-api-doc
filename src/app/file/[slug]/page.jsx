'use client'

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import FileBase64 from "@/app/file/[slug]/container/FileBase64";
import FileDownload from "@/app/file/[slug]/container/File";

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
