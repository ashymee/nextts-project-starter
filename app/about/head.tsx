import constants from "@utils/constants";
import { Fragment } from "react";

const AboutHeader = () => {
  const title = `About - ${constants.publicInfo.appName}`;

  return (
    <Fragment>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </Fragment>
  );
};

export default AboutHeader;
