'use client'
import SidebarLayout from "@/components/Template"
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader, multiPartField} from "@/app/auth/helper";
import {
    exMessageChangeEmailandHandphone, exResponseChangeEmail,
    headerChangeEmail,
    jsonFieldChangeEmail,
    responseChangeEmail
} from "@/app/change_email/helper";
import {Card} from "antd";

const ChangeEmailPass = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'API Ganti Email Dan Password'} customClassTitle={'text-sky-600'}
                           customClassContent={'flex flex-col gap-y-[50px]'}>
                        <TableAPI columns={columnsHeader} dataTable={headerChangeEmail} visibleHeader={false}
                                  border={true}/>
                        <Point title={'multipart field:'} titleSize={'text-lg'}>
                            <TableAPI columns={APIColumns} dataTable={multiPartField}/>
                        </Point>
                        <Point title={'Json Field:'} titleSize={'text-lg'}>
                            <TableAPI columns={APIColumns} dataTable={jsonFieldChangeEmail} />
                            <small>*) harus di isi</small>
                        </Point>
                        <Point title={'respon (Json String):'}>
                            <TableAPI columns={APIColumns} dataTable={responseChangeEmail}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh request JSON yang diterima Digisign"} type={"inner"} bordered={false}>
                                <pre>
                                    {exMessageChangeEmailandHandphone}
                                </pre>
                            </Card>
                            <Card title={"contoh respon JSON yang dikirimkan ke anda"} bordered={false} type={'inner'}>
                                <pre className={'py-5'}>
                                    {exResponseChangeEmail}
                                </pre>
                            </Card>
                        </div>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default ChangeEmailPass
