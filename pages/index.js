import Layout from '../components/Layout'
import Heading from 'lucidium/Heading'
import Link from 'next-serverless/link'

import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <Heading size={900}>Batman TV Shows</Heading>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link href={`/post/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  return { shows: data }
}

export default Index
