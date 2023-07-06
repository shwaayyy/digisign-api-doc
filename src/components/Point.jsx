const Point = ({children, title, customClassContent, customClassTitle}) => {
    return (
        <>
            <div className="flex flex-col gap-y-5">
                <h1 className={`text-3xl font-semibold ${customClassTitle}`}>{title}</h1>
                <div className={`w-full text-[17px] ${customClassContent}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Point
