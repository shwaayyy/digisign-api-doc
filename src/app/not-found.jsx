'use client'
import {Player} from "@lottiefiles/react-lottie-player"
import JsonLottie from "/public/assets/lottie/404.json"
import {Button} from "antd"
import Link from "next/link";

const PageNotFound = () => {
    return (
        <>
            <section>
                <div
                    className="flex justify-center items-center min-h-screen mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col w-full text-left lg:text-center relative">
                        <Player
                            autoplay
                            loop
                            src={JsonLottie}
                            className={"min-w-full h-full"}
                        >
                            <Link href={"/"}>
                                <Button
                                    className={
                                        "text-white font-semibold w-full shadow-lg rounded-lg text-xl text-center"
                                    }
                                >
                                    Kembali ke awal
                                </Button>
                            </Link>
                        </Player>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageNotFound;
