'use client'

import {useState} from "react";
import {Button} from "antd";
import {useRouter} from "next/navigation";
import {LoadingOutlined} from "@ant-design/icons";

const home = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const enterLoading = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/auth/register")
        }, 2000)
    };

    return (
        <>
            <div className="min-w-full min-h-screen px-40 flex flex-col gap-4 items-center justify-center">
                <h1 className="font-extrabold text-2xl">Digisign API</h1>
                <Button
                    type="default"
                    loading={loading[1]}
                    onClick={() => enterLoading()}
                    icon={loading === true ? <LoadingOutlined/> : null}
                    danger={true}
                    size={"large"}
                >
                    Click me!
                </Button>
            </div>
        </>
    )
}

export default home
