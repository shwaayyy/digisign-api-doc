'use client'

import {useState} from "react";
import {Button} from "antd";
import {useRouter} from "next/navigation";

const home = () => {
    const [loadings, setLoadings] = useState([]);
    const router = useRouter()
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            router.push('/register')
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);
        console.log(loadings)
    };
    return (
        <>
            <div className="min-w-full min-h-screen px-40 flex flex-col gap-4 items-center justify-center">
                <h1 className="font-extrabold text-2xl">Digisign API</h1>
                <Button
                    type="primary"
                    loading={loadings[1]}
                    onClick={() => enterLoading(1)}
                >
                    Click me!
                </Button>
            </div>
        </>
    )
}

export default home
