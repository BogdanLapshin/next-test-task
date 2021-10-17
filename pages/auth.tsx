import Head from "next/head";
import React from "react";

import BackgroundImg from "../components/BackgroundImg";
import FormArea from "../components/FormArea";

const auth: React.FC = (): JSX.Element => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="wrapper-auth">
      <BackgroundImg />
      <FormArea form_type="auth" />
    </div>
  </>
);

export default auth;
