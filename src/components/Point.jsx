const Point = ({children, title}) => {
    return (
        <>
            <div className="flex flex-col gap-y-2">
                <h1 className="text-3xl font-semibold ">{title}</h1>
                <div className={"w-full text-[17px]"}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Point
