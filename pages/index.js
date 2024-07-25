import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import Background from '../components/background/Background'

export const siteTitle = 'Romcom Rater'
export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMBD_API_KEY}`
    }
  }
  const filteredUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US%2Cen-UK&page=1&sort_by=popularity.desc&with_genres=10749%2C35&with_original_language=en'
  const res = await fetch(filteredUrl, options)
  const repo = await res.json()
  return { props: { repo } }
}

export default function Home({ repo }) {
  const handleSignOut = async () => {
    await fetch('/api/signOut', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    router.push('/login')
  }

  const filmList = repo.results.map((film, i) => <p key={i}>{film.title}</p>)

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Background />
      <Navbar />
      <div className="homepageWrapper">
        <div className="menuBar">
          <Link href="/userpage" data-testid="userPageLink" id="userLink">
            User page →
          </Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
        <div>Discover more movies...</div>
        <div className="mainContainer" data-testid="filmTitle">{filmList}</div>
      </div>
    </>
  )
}
