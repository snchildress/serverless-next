import { withRouter } from 'next/router'
import Layout from '../components/Layout'

import Heading from 'lucidium/Heading'

export default withRouter((props) => (
  <Layout>
    <Heading size={900}>{props.router.query.title}</Heading>
    <p>This is the blog post content.</p>
  </Layout>
))
