import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative h-[130vh]',
    container: 'before:content-[""] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Blockchain-Matters.jpg")] before:bg-cover before:bg:-center before:opacity-30 before:blur',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-white container-[400px] text-2xl mt-[0.8rem] mb-[1rem]',
    ctaContainer: 'flex',
    accentedButton: 'relative text-lg font-semibold px-12 py-4 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] cursor-pointer',
    gameButton: 'relative text-lg font-semibold px-12 py-4 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] cursor-pointer',
    button: 'relative text-lg font semibold px-12 py-4 bg-black rounded-lg mr-5 text-[#fb4848] hover:bg-[#4c505c] cursor-pointer',
    cardContainer: 'rounded-[3rem]',
    infoContainer: 'h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white',
    author: 'flex flex-col justify-center ml-4',
    name: '',
    infoIcon: 'flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold',
    dev: 'text-green-500 container-[400px] text-4xl mt-[0.8rem] mb-[1rem] font-bold',
}

const Resources = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Getting Started
                        </div>
                        <div className={style.description}>
                            Accounts, Wallets, Currencies, Fees, Blockchains.
                        </div>
                        <div className={style.title}>
                            Buying
                        </div>
                        <div className={style.description}>
                            Buying details.
                        </div>
                        <div className={style.title}>
                            Selling
                        </div>
                        <div className={style.description}>
                            Selling details.
                        </div><div className={style.title}>
                            Creating
                        </div>
                        <div className={style.description}>
                            Creating details.
                        </div>
                        <div className={style.title}>
                            FAQ
                        </div>
                        <div className={style.description}>
                            FAQ Details.
                        </div>
                        <div className={style.title}>
                            Developers
                        </div>
                        <div className={style.dev}>
                        🍀Galant🍀
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources