import Head from "next/head";
import * as React from "react";
import { DEFAULT_APP_METADATA } from "../constants";

const Metadata = () => (
  <Head>
    <title>{DEFAULT_APP_METADATA.name}</title>
    <meta name="description" content={DEFAULT_APP_METADATA.description} />
    <meta name="url" content={DEFAULT_APP_METADATA.url} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />

    {DEFAULT_APP_METADATA.icons.map((icon, index) => (
      <link key={index} rel="icon" href={icon} />
    ))}
  </Head>
);

export default Metadata;
