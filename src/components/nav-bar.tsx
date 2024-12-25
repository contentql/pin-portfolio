'use client'

import { Media, SiteSetting } from '@payload-types'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { slideIn } from '@/animation/framer'
import { TNavItem } from '@/constants/nav-items'
import { cn } from '@/utils/functions'
import { generateMenuLinks } from '@/utils/generateMenuLinks'

const NavBar = ({ siteSettingsData }: { siteSettingsData: SiteSetting }) => {
  const { navbar } = siteSettingsData
  const { logo, menuLinks } = navbar

  const navLinks = menuLinks?.length ? generateMenuLinks(menuLinks) : []
  let logoDetails = {
    url: '',
    alt: '',
  }
  if (Object.keys(logo).length && typeof logo?.imageUrl === 'string') {
    logoDetails = {
      url: logo?.imageUrl,
      alt: `${siteSettingsData.general?.title} logo`,
    }
  } else if (Object.keys(logo).length && typeof logo?.imageUrl === 'object') {
    logoDetails = {
      url: logo.imageUrl?.url!,
      alt: logo.imageUrl?.alt || `${siteSettingsData.general?.title} logo`,
    }
  }
  return (
    <div className='fixed inset-x-0 bottom-0 z-50 bg-bg-light/50 p-4 backdrop-blur-2xl dark:bg-bg-darker/50 md:bottom-auto md:top-0 md:p-8'>
      <motion.div
        className='mx-auto flex h-11 max-w-portfolio items-center justify-between gap-4 sm:gap-10'
        variants={slideIn('up', 'tween', 50, 0.01, 0.5)}>
        <HomeButton logo={logoDetails} className='hidden md:block' />
        <nav className='mx-auto my-2 flex size-full items-center justify-between rounded-full bg-bg-lighter px-2 drop-shadow-md dark:bg-bg-dark md:w-fit md:px-4'>
          <HomeButton logo={logoDetails} className='mr-2 block md:hidden' />
          {navLinks?.map(
            navlink =>
              navlink && (
                <NavItem
                  key={navlink?.href}
                  label={navlink?.label}
                  href={navlink?.href!}
                  target={navlink?.type ? '_blank' : '_self'}
                  icon={navlink?.icon!}
                />
              ),
          )}
          <ToggleTheme className='ml-2 block md:hidden' />
        </nav>
        <ToggleTheme className='hidden md:block' />
      </motion.div>
    </div>
  )
}

export default NavBar

// Components
const NavItem = ({
  icon,
  item,
  href,
  target,
  label,
}: {
  item?: TNavItem
  href: string
  target: string
  label: string
  icon?: (number | null) | Media
}) => {
  // const { iconId, link } = item
  // Check if the current route matches the link
  const isActiveLink = usePathname() === href

  return (
    <Link
      className={cn(
        'group relative flex h-full items-center justify-center px-3 md:px-3.5',
        {
          'text-primary drop-shadow-md dark:text-secondary': isActiveLink,
        },
      )}
      href={href}
      id={href}
      target={target}>
      {/* <i
        className={`${getBoxIcon(label)} text-2xl transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-secondary md:hidden`}
      /> */}
      <Image
        src={(icon as Media)?.url!} // Adjust the function to return the correct image path or URL
        alt={(icon as Media)?.alt || 'icon'}
        width={24} // Set the width to match your design
        height={25} // Set the height to match your design
        className='text-2xl transition-colors duration-300 ease-in-out group-hover:text-primary dark:invert dark:group-hover:text-secondary md:hidden'
      />
      <p className='hidden text-lg font-semibold capitalize tracking-wider transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-secondary md:block'>
        {label}
      </p>
      {isActiveLink && (
        <span className='absolute bottom-0 left-3 h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 group-hover:opacity-50 dark:via-secondary' />
      )}
    </Link>
  )
}

const HomeButton = ({
  className,
  logo,
}: {
  className?: string
  logo: {
    url: string
    alt: string
  }
}) => {
  return (
    <Link
      className={cn(
        'grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary p-1 md:size-11',
        className,
      )}
      href='/'>
      <span className='sr-only'>Home</span>
      <Image
        alt={logo?.alt || 'home'}
        className='size-full'
        height={60}
        src={logo?.url}
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
        src={
          theme === 'light'
            ? '/images/icons/dark-mode.svg'
            : '/images/icons/light-mode.svg'
        }
        width={50}
      />
    </button>
  )
}
