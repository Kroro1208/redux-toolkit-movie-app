"use client";
import Link from 'next/link'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'

const Header = () => {
    return (
        <header className='mb-20'>
            <nav className='border-b border-gray-200 border-opacity-25 py-2.5'>
                <div className='flex flex-wrap justify-between items-center max-mx-auto max-w-screen-xl'>
                    <Link href={'/'} className='flex items-center'>
                        <span className='self-center text-xl font-semibold whitespace-nowrap'>
                            映画
                        </span>
                    </Link>
                </div>
                <div className='flex items-center lg:order-2'>
                    <BsSun className='hover:opacity-50 cursor-pointer' />
                    <BsFillMoonFill className='hover:opacity-50 cursor-pointer' />
                </div>
            </nav>
        </header>
    )
}

export default Header
