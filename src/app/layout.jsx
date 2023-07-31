'use client'

import '@/styles/globals.css'
import {Poppins} from 'next/font/google'

const poppins = Poppins({subsets: ['devanagari'], style: ["normal"], weight: "400"})

export const metadata = {
    title: 'Digisign API',
    description: 'Digisign API documentation',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
        </head>
        <body className={poppins.className}>
        {children}
        </body>
        </html>
    )
};
