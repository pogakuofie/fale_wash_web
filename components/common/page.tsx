import Head from "next/head";
import CustomHead from "./head";

interface PageContainer {
  children: React.ReactNode;
}

const PageContainer = (props: any) => {
  const { children } = props;
  return (
    <>
      <CustomHead />
      {children}
    </>
  );
};

export default PageContainer;
