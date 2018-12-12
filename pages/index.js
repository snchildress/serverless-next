import 'lucidium/styles/lucidium.css'

import Layout from '../components/Layout'
import Avatar from 'lucidium/Avatar'
import Link from 'next-serverless/link'

export default () => (
  <Layout>
    <Link href="/about">
      <Avatar name="About" style={{ cursor: 'pointer' }} />
    </Link>
  </Layout>
)
