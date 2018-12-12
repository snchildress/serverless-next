import Layout from '../components/Layout'
import Heading from 'lucidium/Heading'
import Card from 'lucidium/Card'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
  <Layout>
    <Card>
      <Heading>{props.show.name}</Heading>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium}/>
    </Card>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()
  return { show }
}

export default Post
