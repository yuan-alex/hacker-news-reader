import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@vercel/remix";

import cssUrl from "./globals.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: cssUrl }];

export const meta: MetaFunction = () => [
  { title: "Hacker News Reader" },
  {
    name: "description",
    content: "Hacker News Reader built with Remix",
  },
  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 dark:bg-gray-800">
        <div className="bg-white dark:bg-gray-900 sm:mx-20 sm:mt-3 md:mx-80 md:mt-5">
          <nav className="flex justify-between bg-orange-500 px-5 py-2">
            <Link to="/">
              <p className="text-md font-semibold">Hacker News Reader</p>
            </Link>
          </nav>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
