import Head from "next/head";
import React from "react";
import BackgroundImg from "../components/Background-img";
import FormArea from "../components/Form-area";
const auth = () => {
  return (
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
};

export default auth;
