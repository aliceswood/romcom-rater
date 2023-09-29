import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This page will be amended to be Romcom rater screen!)
        </p>
        <h2>
        <Link href="/user-page">User page</Link>
      </h2>
      </section>
    </Layout>
  );
}