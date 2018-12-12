import { withRouter } from 'next/router'
import Layout from '../components/Layout'

import Heading from 'lucidium/Heading'
import Card from 'lucidium/Card'

const Content = withRouter((props) => (
  <Card>
    <Heading size={900}>{props.router.query.title}</Heading>
    <p>This is the blog post content.</p>
  </Card>
))

export default (props) => (
  <Layout>
    <Content />
  </Layout>
)
