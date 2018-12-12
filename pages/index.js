import 'lucidium/styles/lucidium.css'

import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)
