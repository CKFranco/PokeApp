import Head from 'next/head'
import React from 'react'
import { PokeNavbar } from '../Navbar/Navbar';
import type { ReactNode } from 'react'


interface LayoutProps {
    children: ReactNode;
    title: string;
 }

 const origin = (typeof window === 'undefined') ? '' : window.location.origin 

export const Layout = ({children, title} : LayoutProps) => {

  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Christian Franco'/>
            <meta name='description' content={`Informacion sobre pokemon ${title}`}/>
            <meta name='keyword' content={`listado de pokemon, pokemon, pokedex, ${title}`}/>

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Informacion sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <PokeNavbar/>

        <main style={{
          padding: '0px 25px'
        }}>
            {children}
        </main>
        
    </> 
  )
}
