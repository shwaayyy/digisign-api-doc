'use client'
import {Layout, Menu, theme} from 'antd';
import {useRouter, usePathname} from "next/navigation";
import {useState} from "react";

const {Header, Content, Footer, Sider} = Layout;

const items = [
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
                        key: '/register'
                    },
                    {
                        label: 'Aktivasi',
                        icon: null,
                        key: '/activation'
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
                        key: '/send_doc'
                    },
                    {
                        label: 'Tandatangan Dokumen',
                        icon: null,
                        key: '/sign_doc'
                    }
                ]
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
                theme={"light"}
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
                    width: '400px'
                }}
                className={"min-h-screen z-40"}
            >
                <div className="h-16"/>
                <Menu onClick={(v) => router.push(v.key)} theme="light" defaultSelectedKeys={[pathName]}
                      items={items}
                      inlineIndent={50} mode={'vertical'}/>
            </Sider>
            <Layout className={`lg:ml-[200px] ${isCollapse && "ml-0"}`}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        height: "100px",
                        marginBottom: '25px'
                    }}
                />
                <Content className="flex flex-col gap-y-2 mx-10 my-2">
                    <div style={{
                        padding: '48px',
                        background: colorBgContainer,
                    }}
                         className={'min-h-screen'}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Digisign ©2023 Created by Digisign Product Team
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Template;
