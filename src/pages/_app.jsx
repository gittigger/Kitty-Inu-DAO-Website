import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'
import Transition from '@/components/animation/Transition'

import useStore, { setState } from '@/helpers/store'
import Header from '@/config'
import Dom from '@/components/layout/dom'

import '@/styles/index.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'react-toastify/dist/ReactToastify.css'

import { useProgress } from '@react-three/drei'
//import Web3Provider from '@/components/base/Web3Provider'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()
  const { progress } = useProgress()

  const isPortrait = useMediaQuery({ query: '(max-width: 1024px)' });
  const isColored = pageProps.title == 'Buy' || pageProps.title == 'Whitepaper' ? 'colored-background' : '';

  let title = 'Kitty Inu DAO';
  if (pageProps.title && pageProps.title !== 'Home') {
    title = pageProps.title + ' - ' + title;
  }

  useEffect(() => {
    setState({ router })
  }, [router])

  return (
    <>
      <Header title={title} />
      <Transition>
        <Dom classes={isColored}>
          {Component && <Component {...pageProps} />}
        </Dom>
      </Transition>
      {Component?.r3f && (
        <LCanvas>
          {Component.r3f({ isPortrait })}
        </LCanvas>
      )}
      {/* <div className='relative inset-0 flex flex-col items-center justify-end z-20 h-10' style={{ top: '90%' }}>
      </div> */}
    </>
  )
}

export default App
