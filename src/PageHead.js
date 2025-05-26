import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>Kazoum | {page}</title>
    </Head>
  );
};

export default PageHead;
