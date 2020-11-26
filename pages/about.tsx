import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
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

export default AboutPage;
