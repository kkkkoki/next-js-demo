import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href="/api-demo/api-demo">
        <a>Go API DEMO</a>
      </Link>
    </p>
    <p>
      <Link href="/pokemon">
        <a>Go Pokemon DEMO</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
