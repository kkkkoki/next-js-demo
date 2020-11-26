import Link from 'next/link';
import { useState } from 'react';
import { Pokemon } from '../../interfaces/pokemon';
import style from '../../components/css-modules/Pokemon.module.css';
import Image from 'next/image';
import Layout from '../../components/Layout';

const PokemonIndexPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    {
      name: 'ラッキー',
      life: 100,
      image: 'pink',
    },
    {
      name: 'リザードン',
      life: 100,
      image: 'doragon',
    },
    {
      name: 'メタモン',
      life: 100,
      image: 'metamon',
    },
  ]);

  const atack = (index: number) => {
    pokemons[index].life -= 10;
    setPokemons([...pokemons]);
  };

  const heal = (index: number) => {
    pokemons[index].life += 10;
    setPokemons([...pokemons]);
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Pokemon World 👋</h1>
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
        <Link href="/api-demo/api-demo">
          <a>Go API DEMO</a>
        </Link>
      </p>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <p>{pokemon.name}</p>
            <div className={style.life}>
              <div
                className={`${style.life__bar} ${
                  pokemon.life < 30 && style.denger
                }`}
                style={{ transform: 'scaleX(' + pokemon.life / 100 + ')' }}
              ></div>
            </div>
            <Image
              src={`/images/${pokemon.image}.png`}
              alt={pokemon.name}
              width={160}
              height={160}
            />
            <button disabled={pokemon.life < 10} onClick={() => atack(index)}>
              こうげき
            </button>
            <button disabled={pokemon.life > 90} onClick={() => heal(index)}>
              かいふく
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PokemonIndexPage;
