import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'


export default function Buy() {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start('visible')
        } else {
            control.start('hidden')
        }
    }, [control, inView])

    return (
        <>
            <Header />
            <main className='flex flex-col items-center justify-center m-auto' style={{
                background: 'url(/img/buy/coin_overlay.webp)',
                backgroundPosition: 'right -450px center',
                backgroundRepeat: 'no-repeat'
            }}>
                <section className='w-11/12 lg:w-10/12 xl:w-8/12 flex flex-col items-center justify-center bg-[#b517b3]/30 px-10 pt-4 pb-28 rounded-b-lg backdrop-blur-md'>
                    <Hero title='Buy Kitty Inu Token' description='' />
                    <p>$kitty is currently only available on the decentralized exchange, Uniswap</p>
                    <button
                        className='white-blue-button dex mt-12 flex items-center cursor-pointer transform transition-all duration-200 ease-in shadow-md hover:shadow-sm hover:translate-y-1'
                        onClick={() => window.open('https://app.uniswap.org/#/swap?outputCurrency=0x61a35258107563f6b6f102ae25490901c8760b12&chain=mainnet', '_blank')}
                    >
                        Buy
                        <img src='/img/buy/kitty_icon.svg' className='ml-2 mr-2 w-6 h-6'></img>
                        on DeFi (Uniswap)
                        <img src='/img/buy/uniswap.webp' className='ml-2 w-10 h-10'></img>
                    </button>
                    <button className='white-blue-button disable mt-12 mb-12 flex items-center cursor-pointer shadow transform transition duration-200 ease-in'>
                        Buy
                        <img src='/img/buy/kitty_icon.svg' className='ml-2 mr-2 w-6 h-6'></img>
                        on centralized exchanges
                    </button>

                    <p className='text-sm'>On May 20th, 2023 Kitty Inu migrated to an upgraded and optimized ERC20 contract!</p>
                    <p className='text-sm mt-4'>New Contract Address:</p>
                    <p className='text-lg mt-4'>0x61a35258107563f6b6f102ae25490901c8760b12</p>
                    <p className='text-sm mt-4'>V2 tokens were airdropped 1:1 to wallets holding the V1 token.</p>
                </section>
            </main>
            <HomeFooter />
        </>
    )
}


export async function getStaticProps() {
    return {
        props: {
            title: 'Buy',
        },
    }
}
