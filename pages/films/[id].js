import Layout from '../../components/layout';
import { getAllFilmIds, getFilmData } from '../../lib/films';

export async function getStaticPaths() {
  const paths = getAllFilmIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filmData = getFilmData(params.id);
  return {
    props: {
      filmData,
    },
  };
}

export default function Film({filmData}) {
  return (
    <Layout> {filmData.title}
    <br />
    {filmData.id}
    <br />
    {filmData.date}
    </Layout>
  );
}