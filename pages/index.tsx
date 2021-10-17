import FormArea from "../components/Form-area";
import BackgroundImg from "../components/Background-img";
import Head from "next/head";
const index: React.FC = (): JSX.Element => {
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
      <div className="wrapper">
        <BackgroundImg />
        <FormArea form_type="reg" />
      </div>
    </>
  );
};

export default index;
