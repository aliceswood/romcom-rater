import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Romcom Rater';
export default function Home() {

return (
  <>
    <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} data-testid="romComPlaceholder">
        <p>
          (This page will be amended to be Romcom rater screen!)
        </p>
      </section>
      <div className={utilStyles.navigationLinks}>
        <Link href="/user-page" data-testid="userPageLink">User page →</Link>
      </div>
  </>

  );
}