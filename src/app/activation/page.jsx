'use client'
import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {columnsHeader, dataHeader, multiPartField} from "@/app/activation/helper";
import {APIColumns} from "@/app/register/helper";

const Activation = () => {
    return (
        <>
            <div>
                <SidebarLayout>
                    <Point title={"API Aktivasi"} customClassTitle={"text-sky-800"} customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI columns={columnsHeader} dataTable={dataHeader} visibleHeader={false} border={true} />
                        <Point title={"Multipart Field:"} customClassTitle={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={multiPartField} />
                        </Point>
                        <Point title={"Json Field:"}>

                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default Activation
