'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {LoadingOutlined} from "@ant-design/icons";

// const home = () => {
//     const [loading, setLoading] = useState(false);
//     const router = useRouter()
//     const enterLoading = () => {
//         setLoading(true);
//         setTimeout(() => {
//             router.push("/auth/register")
//         }, 2000)
//     };
//
//     return (
//         <>
//             <div className="min-w-full min-h-screen px-40 flex flex-col gap-4 items-center justify-center">
//                 <h1 className="font-extrabold text-2xl">Digisign API</h1>
//                 <Button
//                     type="default"
//                     loading={loading[1]}
//                     onClick={() => enterLoading()}
//                     icon={loading === true ? <LoadingOutlined/> : null}
//                     danger={true}
//                     size={"large"}
//                 >
//                     Click me!
//                 </Button>
//             </div>
//         </>
//     )
// }

const Home = () => {
    const router = useRouter();

    // Redirect to '/auth/register' on the client-side
    useEffect(() => {
        router.push('/auth/register');
    }, []);

    // This component doesn't render anything since we handle the redirect in useEffect
    return <div className={"w-full h-full flex justify-center items-center"}><LoadingOutlined className={'text-7xl'}/></div>
}

// This function will run on the server-side and perform the redirect
export const getServerSideProps = async () => {
    return {
        props: {},
        redirect: {
            destination: '/auth/register',
            permanent: true, // Set this to true if it's a permanent redirect
        },
    };
}

export default Home
