import 'lucidium/styles/lucidium.css'

import Avatar from 'lucidium/Avatar'
import Link from 'next-serverless/link'

export default () => (
  <div>
    <Link href="/about">
      <Avatar name="About" style={{ cursor: 'pointer' }} />
    </Link>
  </div>
)
