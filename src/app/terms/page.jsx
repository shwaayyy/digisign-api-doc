import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import {Card} from "antd";
import {ParagraphTerms} from "@/app/terms/helper";

const TemplateTerms = () => {
    return (
        <>
            <div>
                <SidebarLayout>
                    <Point title={`Templat untuk “Syarat dan Ketentuan”`} customClassTitle={'text-sky-500'}>
                        <Point
                            title={'Templat untuk "Syarat dan Ketentuan" tambahan yang perlu disertakan ke aplikasi mitra.'} titleSize={'text-lg'}>
                            <Card bordered={true} type={'inner'} className={'w-1/2'}
                                  title={'XI. SERTIFIKAT ELEKTRONIK DAN TANDA TANGAN ELEKTRONIK DIGISIGN'} >
                                {ParagraphTerms.map((v, i) => {
                                    return <p className={'text-base'} key={i}>{`${v}\n\n`}</p>
                                })}
                            </Card>
                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default TemplateTerms
