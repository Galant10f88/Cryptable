import React from 'react'
import { Popover } from '@headlessui/react'
import { useNetwork, ChainId } from '@thirdweb-dev/react'
import Link from 'next/link'

const style = {
    Binance: `text-yellow-500 hover:text-yellow-200 hover:underline underline-offset-4`,
    Ethereum: `text-fuchsia-500 font-bold hover:text-cyan-300 hover:underline underline-offset-4`,
    Polygon: `text-purple-500 hover:text-purple-300 hover:underline underline-offset-4`,
    Goerli: `text-gray-500 hover:text-gray-200 hover:underline underline-offset-4`,
    Ava: `text-red-500 hover:text-red-300 hover:underline underline-offset-4`,
    chev: `text-cyan-300`,
    chev2: `text-sky-400`,
    chev3: `text-fuchsia-400`,
    bold: `font-bold`

}

//{<span className={style.chev2}>⌄</span><span className={style.chev3}>⌄</span>}

const DropInfo = () => {
    const [, switchNetwork] = useNetwork()
    return (
        <Popover className="relative">
            <Popover.Button className={style.bold}> Info</Popover.Button>

            <Popover.Panel className="absolute z-10 py-1 px-1 bg-[#04111d] rounded border border-cyan-300 w-24">
                <div className="grid grid-cols-2">
                    <ul>
                        <li>
                            <Link href='../../general/education'>
                                <div className={style.Ethereum}>Education</div>
                            </Link>
                        </li>
                        <li>
                        <Link href='../../general/resources'>
                                <div className={style.Ethereum}>Resources</div>
                            </Link>
                        </li>
                        <li>
                        <Link href='../../general/stats'>
                                <div className={style.Ethereum}>Stats</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Popover.Panel>
        </Popover>
    )
}


export default DropInfo