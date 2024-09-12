import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import Head from 'next/head'
import React from 'react'

export default function Page() {
  return (
    <>
      <Head><title>Política de privacidade - Corpore</title></Head>
      <Header/>
        <main>
          <Section>
            <h1>Política de privacidade</h1>
            <p></p>
          </Section>
        </main>
      <Footer/>
    </>
  )
}
