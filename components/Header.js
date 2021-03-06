import Banner from 'lucidium/Banner'
import Link from 'next-serverless/link'

const linkStyle = {
  marginRight: 15
}

export default () => (
  <div>
    <Banner>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </Banner>
  </div>
)
