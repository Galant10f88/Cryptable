import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'
import { useNetwork, ChainId } from '@thirdweb-dev/react'
import Link from 'next/link'

const style = {
    title: 'relative flex items-center justify-center text-white text-[40px] font-semibold',
    wrapper: `w-screen flex items-center justify-center mt-14`,
    content: `bg-gradient-to-b from-gray-900 to-gray-600 w-[40rem] rounded-2xl p-4 border border-fuchsia-400`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-neutral-900 my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-gray-400  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl text-white`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-cyan-500 my-2 rounded-2xl py-5 px-8 text-2xl font-semibold flex items-center justify-center cursor-pointer border border-black hover:border-white`,
    swap: `text-fuchsia-400`,
    binanceButton: 'relative text-lg font-semibold px-8 py-1 bg-yellow-500 rounded-full mr-5 text-yellow-300 hover:bg-black hover:text-yellow-100 border border-yellow-500 hover:border-yellow-100 cursor-pointer shadow-lg hover:shadow-yellow-500/80 bg-gradient-to-r from-yellow-500 via-teal-500 to-sky-500',
    ethButton: 'relative text-lg font-semibold px-8 py-1 bg-blue-500 rounded-full mr-5 text-cyan-300 hover:bg-black hover:text-cyan-100 border border-cyan-400 hover:border-cyan-100 cursor-pointer shadow-lg hover:shadow-cyan-500/90 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500',
    polyButton: 'relative text-lg font-semibold px-8 py-1 bg-purple-500 rounded-full mr-5 text-purple-200 hover:bg-black hover:text-purple-50 border border-purple-400 hover:border-purple-100 cursor-pointer shadow-lg hover:shadow-fuchsia-500 bg-gradient-to-r from-purple-500 via-cyan-500 to-yellow-500',
    info: `w-screen flex items-center justify-center text-gray-500`
}

const DiaSwap = () => {
    const [, switchNetwork] = useNetwork()
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.title}>
                    CryptoSwap
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div className={style.formHeader}>
                        <div className={style.swap}>Chains</div>
                        <Link href='../../currency/testing'>
                        <button className={style.binanceButton} onClick={() => switchNetwork(ChainId.BSC)}>Binance</button>
                        </Link>
                        <button className={style.ethButton} onClick={() => switchNetwork(ChainId.Mainnet)}>Ethereum</button>
                        <button className={style.polyButton} onClick={() => switchNetwork(ChainId.Polygon)}>Polygon</button>
                        <div>
                            <RiSettings3Fill />
                        </div>
                    </div>
                    <div className={style.transferPropContainer}>
                        <input
                            type="text"
                            className={style.transferPropInput}
                            placeholder="0.0"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            onChange={(e) => handleChange(e, 'amount')}
                        />
                        <div className={style.currencySelector}>
                            <div className={style.currencySelectorContent}>
                                <div className={style.currencySelectorIcon}>
                                    <Image src={ethLogo} alt="eth logo" height={20} width={20} />
                                </div>
                                <div className={style.currencySelectorTicker}>ETH</div>
                                <AiOutlineDown className={style.currencySelectorArrow} />
                            </div>
                        </div>
                    </div>
                    <div className={style.transferPropContainer}>
                        <input
                            type="text"
                            className={style.transferPropInput}
                            placeholder="0.0"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            onChange={(e) => handleChange(e, 'amount')}
                        />
                        <div className={style.currencySelector}>
                            <div className={style.currencySelectorContent}>
                                <div className={style.currencySelectorIcon}>
                                    <Image src={ethLogo} alt="eth logo" height={20} width={20} />
                                </div>
                                <div className={style.currencySelectorTicker}>ETH</div>
                                <AiOutlineDown className={style.currencySelectorArrow} />
                            </div>
                        </div>
                    </div>
                    <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
                        Confirm
                    </div>
                </div>
            </div>
            <div>
                <br/>
            </div>
            <div className={style.info}>
                 Cryptcurrencies can be swapped on 3 different chains. Binance, Ethereum, and Polygon. Click a button above to switch chains.
            </div>
            <div>
                <br/>
            </div>
        </div>
    )
}

export default DiaSwap