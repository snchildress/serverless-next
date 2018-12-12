import 'lucidium/styles/lucidium.css'

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
          <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  return { shows: data }
}

export default Index
