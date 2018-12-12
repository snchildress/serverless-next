import 'lucidium/styles/lucidium.css'

import Layout from '../components/Layout'
import PostLink from '../components/PostLink'
import Heading from 'lucidium/Heading'
import Card from 'lucidium/Card'

export default () => (
  <Layout>
    <Heading size={900}>My Blog</Heading>
    <Card style={{ width: '300px' }}>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js" />
      <PostLink title="Deploy apps with Zeit" />
    </Card>
  </Layout>
)
