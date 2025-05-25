import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>Kura | {page}</title>
    </Head>
  );
};

export default PageHead;
