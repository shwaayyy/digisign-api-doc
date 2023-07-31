'use client'
import {Layout, Menu as MenuAnt, theme} from 'antd';
import {useRouter, usePathname} from "next/navigation";
import {useState} from "react";
import DigisignLogo from "/public/digisign-id-white.png";
import Image from "next/image";
import Link from "next/link";

const {Header, Content, Footer, Sider} = Layout;

const itemsNav = [
    {
        label: 'Digisign API',
        key: 'api',
        icon: null,
        children: [
            {
                label: 'Auth',
                key: '/',
                icon: null,
                children: [
                    {
                        label: 'Registrasi',
                        icon: null,
                        key: '/auth/register'
                    },
                    {
                        label: 'Aktivasi',
                        icon: null,
                        key: '/auth/activation'
                    },
                ]
            },
            {
                label: 'Dokumen',
                key: 'subdoc',
                icon: null,
                children: [
                    {
                        label: 'Kirim Dokumen',
                        icon: null,
                        key: '/doc/send'
                    },
                    {
                        label: 'Tandatangan Dokumen',
                        icon: null,
                        key: '/doc/sign'
                    }
                ]
            },
            {
                label: 'Download Dokumen',
                key: 'subdoc2',
                icon: null,
                children: [
                    {
                        label: 'File',
                        icon: null,
                        key: '/download/file_download'
                    },
                    {
                        label: 'Base64',
                        icon: null,
                        key: '/download/base64'
                    }
                ]
            },
            {
                label: 'Ganti Email/Password',
                key: '/change_email',
                icon: null
            },
            {
                label: 'Response Code',
                key: 'subdoc3',
                icon: null,
                children: [
                    {
                        label: 'API',
                        icon: null,
                        key: '/response_code/api'
                    },
                    {
                        label: 'HTML',
                        icon: null,
                        key: '/response_code/html'
                    }
                ]
            },
            {
                label: 'Template',
                key: '/terms',
                icon: null
            },
        ],
        type: 'group'
    }
];
const Template = ({children}) => {
    const router = useRouter()
    const pathName = usePathname()
    const [isCollapse, setIsCollapse] = useState(false)

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                theme={"dark"}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken)
                }}
                onCollapse={(collapsed) => {
                    setIsCollapse(collapsed);
                }}
                style={{
                    position: "fixed",
                    width: '500px'
                }}
                width={250}
                className={"min-h-screen z-40"}
            >
                <div className="h-24 bg-[#001529] p-5 flex items-center justify-center">
                    <Link href={"/"}>
                        <Image src={DigisignLogo} alt={"logo"} width={200}/>
                    </Link>
                </div>
                <MenuAnt onClick={(v) => router.push(v.key)} theme="dark" defaultSelectedKeys={[pathName]}
                      items={itemsNav}
                      inlineIndent={100} mode={'vertical'}/>
            </Sider>
            <Layout className={`lg:ml-[250px] ${isCollapse && "ml-0"}`}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        height: "60px",
                        marginBottom: '25px'
                    }}
                />
                <Content className="flex flex-col gap-y-2 mx-10 my-2">
                    <div style={{
                        padding: '48px',
                        background: colorBgContainer,
                    }}
                         className={'min-h-screen flex flex-col gap-y-8'}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Digisign ©2023 Created by Digisign QA Team
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Template;
