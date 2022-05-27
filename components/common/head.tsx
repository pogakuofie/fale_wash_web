import Head from "next/head";

// interface CustomHead {
//   title: string | undefined;
// }

const CustomHead = (props: any) => {
  const { title } = props;

  return (
    <Head>
      <title>{title || "Fale Wash - Clean laundry at your doorstep."}</title>
      <meta name='description' content={"Clean laundry at your doorstep"} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CustomHead;
