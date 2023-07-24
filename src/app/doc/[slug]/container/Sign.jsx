'use client'

import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/auth/helper";
import {dataSignDoc, headerSignDoc} from "@/app/doc/helper";


const SignDoc = () => {
    return (
        <>
            <div>
                <SidebarLayout>
                    <Point title={"API Tandatangan Dokumen"} customClassTitle={"text-sky-800"}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI columns={columnsHeader} dataTable={headerSignDoc} border={true}
                                  visibleHeader={false}/>
                        <Point title={"Multipart Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={dataSignDoc}/>
                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default SignDoc
