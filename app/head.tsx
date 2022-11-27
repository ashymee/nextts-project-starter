import constants from "@utils/constants";
import { Fragment } from "react";

const RootHeader = () => {
  const description = "Next.JS App Starter";
  const title = `Home - ${constants.publicInfo.appName}`;

  return (
    <Fragment>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={constants.publicInfo.appName} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="twitter:card" content="summary" />
      {/* <meta property="twitter:creator" content={social.twitter} /> */}
      <meta property="twitter:title" content={constants.publicInfo.appName} />
      <meta property="twitter:description" content={description} />
      <meta name="apple-mobile-web-app-title" content={description} />
    </Fragment>
  );
};

export default RootHeader;
