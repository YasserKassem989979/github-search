import Head from 'next/head'
import Image from 'next/image'
import InputText from '@/components/common/InputText'
import Logo from "@/assets/logo.png";
import Tag from '@/components/common/Tag'
import { GoRepo, GoPerson } from "react-icons/go";
import { FormEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import { SEARCH_TYPE_VALUES } from '@/lib/types/constant';
import { useRouter } from 'next/router';
const { repositories, users } = SEARCH_TYPE_VALUES

export default function Home() {
  const router = useRouter();
  const [query, setQury] = useState<string>('');
  const [type, setType] = useState<string>('repositories')

  const onChangeQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    setQury(e.currentTarget.value);
  }, []);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (query) {
      router.push(`/${type}?q=${query}`)
    }
  }

  return (
    <>
      <Head>
        <title>GitHub Search API</title>
        <meta name="description" content="Search in Github users and repositories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='contianer h-screen'>
        <div className='flex flex-col	justify-center items-center h-5/6'>
          <Image className='mb-6 w-6/12 md:w-5/12' src={Logo} alt='logo' />
          <div className='w-2/4'>
            <form role={'form'} onSubmit={handleSubmit}>
              <InputText role={'form'} value={query} onChange={onChangeQuery} placeholder='Search' styleClass='rounded-t-full' />
            </form>
          </div>
          <div className='flex items-center mt-4'>
            <p className='text-slate-500 text-sm'>Search In:</p>
            <Tag onClick={() => setType(repositories)} title='Repos' icon={<GoRepo size={18} />} styleClass={`${type !== repositories ? 'bg-transparent' : ''} cursor-pointer py-2`} />
            <Tag onClick={() => setType(users)} title='Users' icon={<GoPerson size={18} />} styleClass={`${type !== users ? 'bg-transparent' : ''} cursor-pointer py-2`} />
          </div>
          <Link className='border px-8 py-2 mt-8 text-slate-700 text hover:shadow-lg rounded-sm' href={query ? `/${type}?q=${query}` : '/'}>
            Search
          </Link>
        </div>
      </main>
    </>
  )
}