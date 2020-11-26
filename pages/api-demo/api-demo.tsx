import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';

type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return {
    props: {
      users,
    },
  };
};

const ApiDemoPage = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="API DEMO Page | Next.js + TypeScript Example">
      <h1>API DEMO</h1>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/pokemon">
          <a>Go Pokemon DEMO</a>
        </Link>
      </p>
      <ul>
        {users.map((user: User, index: number) => (
          <li key={index}>
            <p>名前: {user.name}</p>
            <p>ID: {user.id}</p>
            <p>ニックネーム: {user.username}</p>
            <p>メールアドレス: {user.email}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ApiDemoPage;
