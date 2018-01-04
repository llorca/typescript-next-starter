import * as React from "react";
import Head from "next/head";

interface IPage {
  title?: string;
  children: React.ReactNode;
}

export default ({ title, children }: IPage) => (
  <div>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title != null ? `${title} — ` : ""}TNS_CONFIG_DEFAULT_TITLE</title>
      <meta name="description" content="TNS_CONFIG_DESCRIPTION" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/static/images/favicon.png" />
      <link rel="stylesheet" href="/static/styles/normalize.css" />
      <link rel="stylesheet" href="/static/styles/main.css" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/images/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/images/touch-icon-ipad-retina.png" />
    </Head>

    {children}
  </div>
);
