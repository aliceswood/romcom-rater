import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Romcom Rater';
export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMBD_API_KEY}`
    }
  };
  const filteredUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US%2Cen-UK&page=1&sort_by=popularity.desc&with_genres=10749%2C35&with_original_language=en"
  const res = await fetch(filteredUrl, options)
  const repo = await res.json()
  return { props: { repo } }
}

export default function Home({repo}) {

  const filmList = repo.results.map(((film, i) => (
    <p key={i}>{film.title}</p>
  )))
  
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div data-testid="filmTitle">{filmList}</div>
      <div className={utilStyles.navigationLinks}>
        <Link href="/userpage" data-testid="userPageLink" id="userLink">User page →</Link>
      </div>
    </>
  )

  }
