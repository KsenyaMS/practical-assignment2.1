import * as React from 'react';
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";
import { MyModal } from './Modal';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export default function App() {
    const [count, setCount] = React.useState(0)
    return (
        <html>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <MyModal />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}