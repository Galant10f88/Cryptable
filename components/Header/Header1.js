import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fyrefliLogo from '../../assets/fyrefli.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import DropChains from '../Drop/dropChains'
import DropMkt from '../Drop/dropMkt'
import DropInfo from '../Drop/dropInfo'
import DropSwap from '../Drop/dropSwap'
import DropProfile from '../Drop/dropProfile'
import diamond from '../../assets/diamond.png'

//text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
//bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
//bg-[#04111d]
//bg-opacity-90
//bg-gradient-to-r from-fuchsia-600 to-pink-600
//shadow-cyan-500/50

const style = {
    wrapper: 'sticky top-0 z-50 bg-[#04111d] bg-opacity-70 w-screen px-[1.2rem] py-4 flex shadow-xl backdrop-blur-sm bg-slate-700/30',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-white to-fuchsia-600 font-semibold text-2xl',
    searchBar: 'flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]',
    searchIcon: 'text-[#8a939b] mx-3 font-bold text-lg',
    searchInput: 'h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]',
    headerItems: 'flex items-center justify-end',
    headerItem: 'text-white px-4 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerSwap: 'text-white px-2 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerIcon: 'text-slate-400 text-4xl px-4 hover:text-white cursor-pointer',
    cheating: 'text-transparent px-4 font-bold',
    button: `border px-1 border-cyan-300 bg-[#04111d] p-[0.1rem] text-xl font-semibold rounded-lg cursor-pointer text-[#fb4848]`,
    snow: `h-screen w-screen bg-blue-200 relative`
}


const Header1 = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                    <Image src={diamond} height={40} width={40} alt='' />
                    <div className={style.logoText}>CRYPTABLE</div>
            </div>
            </Link>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch/>
            </div>
            <input className={style.searchInput} 
            placeholder="Search items, collections, and accounts"
            />
        </div>
        <div className={style.headerItems}>
                <div className={style.headerItem}> <DropMkt/> </div>
                <div className={style.headerSwap}> <DropSwap/> </div>
                <div className={style.headerItem}> <DropInfo/> </div>
                <Link href='../../currency/testing'>
            <div className={style.cheating}> . </div>
            </Link>
                <div className={style.button}> <DropChains/> </div>
            <div className={style.headerIcon}> <DropProfile/> </div>
            <Link href='../../general/games'>
                <div className={style.headerItem}> Games </div>
            </Link>
            <div className={style.cheating}> . </div>
        </div>
    </div>;
}

export default Header1