import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Films from './films';

export const siteTitle = 'Romcom Rater';
export default function Home() {

return (
  <>
    <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} data-testid="romComPlaceholder">
        <div>
          <Films/>
        </div>
      </section>
      <div className={utilStyles.navigationLinks}>
        <Link href="/user-page" data-testid="userPageLink" id="userLink">User page →</Link>
      </div>
  </>

  );
}