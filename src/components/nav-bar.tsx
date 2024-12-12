'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DARK_MODE from 'public/images/icons/dark-mode.svg'
import LIGHT_MODE from 'public/images/icons/light-mode.svg'
import LOGO from 'public/images/icons/logo.svg'
import { useEffect, useState } from 'react'

import { slideIn } from '@/animation/framer'
import { NAV_ITEMS, TNavItem } from '@/constants/nav-items'
import { cn, getBoxIcon } from '@/utils/functions'

const NavBar = () => {
  return (
    <div className='bg-bg-light/50 dark:bg-bg-darker/50 fixed inset-x-0 bottom-0 z-50 p-4 backdrop-blur-2xl md:bottom-auto md:top-0 md:p-8'>
      <motion.div
        className='max-w-portfolio mx-auto flex h-11 items-center justify-between gap-4 sm:gap-10'
        variants={slideIn('up', 'tween', 50, 0.01, 0.5)}>
        <HomeButton className='hidden md:block' />
        <nav className='bg-bg-lighter dark:bg-bg-dark mx-auto my-2 flex size-full items-center justify-between rounded-full px-2 drop-shadow-md md:w-fit md:px-4'>
          <HomeButton className='mr-2 block md:hidden' />
          {NAV_ITEMS.map(item => (
            <NavItem key={item.iconId} item={item} />
          ))}
          <ToggleTheme className='ml-2 block md:hidden' />
        </nav>
        <ToggleTheme className='hidden md:block' />
      </motion.div>
    </div>
  )
}

export default NavBar

// Components
const NavItem = ({ item }: { item: TNavItem }) => {
  const { iconId, link } = item
  // Check if the current route matches the link
  const isActiveLink = usePathname() === link

  return (
    <Link
      className={cn(
        'group relative flex h-full items-center justify-center px-3 md:px-3.5',
        {
          'text-primary drop-shadow-md dark:text-secondary': isActiveLink,
        },
      )}
      href={link}
      id={link}>
      <i
        className={`${getBoxIcon(iconId)} text-2xl transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-secondary md:hidden`}
      />
      <p className='hidden text-lg font-semibold capitalize tracking-wider transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-secondary md:block'>
        {iconId}
      </p>
      {isActiveLink && (
        <span className='absolute bottom-0 left-3 h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 group-hover:opacity-50 dark:via-secondary' />
      )}
    </Link>
  )
}

const HomeButton = ({ className }: { className?: string }) => {
  return (
    <Link
      className={cn(
        'grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary p-1 md:size-11',
        className,
      )}
      href='/'>
      <span className='sr-only'>Home</span>
      <Image
        alt='home'
        className='size-full'
        height={60}
        src={LOGO}
        width={50}
      />
    </Link>
  )
}

const ToggleTheme = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={cn(
        'grid size-8 place-items-center rounded-full bg-gradient-to-bl from-primary to-secondary p-2 md:size-11',
        className,
      )}
      onClick={toggleTheme}>
      <Image
        alt='mode'
        className='size-full invert'
        height={60}
        src={theme === 'light' ? DARK_MODE : LIGHT_MODE}
        width={50}
      />
    </button>
  )
}
