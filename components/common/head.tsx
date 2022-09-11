import Head from "next/head";

const CustomHead = (props: any) => {
  const { title } = props;

  return (
    <Head>
      <title>
        {title || "Fale Wash - Clean Laundry. Always at your Doorstep."}
      </title>
      <meta name='description' content={"Clean laundry at your doorstep"} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CustomHead;
