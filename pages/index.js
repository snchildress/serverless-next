import 'lucidium/styles/lucidium.css'

import Header from '../components/Header'
import Avatar from 'lucidium/Avatar'
import Link from 'next-serverless/link'

export default () => (
  <div>
    <Header />
    <Link href="/about">
      <Avatar name="About" style={{ cursor: 'pointer' }} />
    </Link>
  </div>
)
