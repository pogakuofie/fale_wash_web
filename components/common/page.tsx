import Head from "next/head";
import CustomHead from "./head";

const PageContainer = (props: any) => {
  const { children, title } = props;
  return (
    <>
      <CustomHead title={title} />
      {children}
    </>
  );
};

export default PageContainer;
