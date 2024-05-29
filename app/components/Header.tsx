"use client";
import { useAppDispatch, useAppSelector } from '@/hooks/storeHook';
import { toggleTheme } from '@/lib/features/theme/themeSlice';
import Link from 'next/link'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'

const Header = () => {
    const darkTheme = useAppSelector((state) => state.darkTheme);
    const dispatch = useAppDispatch();
    const onToggle = () => dispatch(toggleTheme());
    return (
        <header className='mb-20'>
            <nav className='border-b border-gray-500 dark:border-sky-300 border-opacity-25 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <Link href={'/'} className='flex items-center'>
                        <span className='self-center text-xl font-semibold whitespace-nowrap'>
                            映画
                        </span>
                    </Link>
                    <div className='flex items-center lg:order-2'>
                        {darkTheme && <BsSun onClick={onToggle} className='hover:opacity-50 cursor-pointer mr-2' />}
                        {!darkTheme && <BsFillMoonFill onClick={onToggle} className='hover:opacity-50 cursor-pointer' />}

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
