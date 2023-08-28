const Point = ({children, title, customClassContent, customClassTitle, titleSize}) => {
    return (
        <>
            <div className="flex flex-col gap-y-5 w-full">
                <h1 className={`${titleSize ?? "text-3xl"} font-semibold ${customClassTitle}`}>{title}</h1>
                <div className={`w-full text-[17px] ${customClassContent}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Point
