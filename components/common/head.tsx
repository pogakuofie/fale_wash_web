import Head from "next/head";

interface CustomHead {
  title: String;
}

const CustomHead = (title: string) => {
  return (
    <div>
      <Head>
        <title>{title || "Fale Wash - Clean laundry at your doorstep."}</title>
        <meta name='description' content={"Clean laundry at your doorstep"} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default CustomHead;
