import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { BOXICONS } from '@/lib/box-icons'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getBoxIcon = (id: string) => {
  const boxIconId = Object.entries(BOXICONS).find(entry => entry[0] === id)?.[0]

  if (!boxIconId) {
    return 'bx ' + BOXICONS.default
  }

  return 'bx ' + BOXICONS[boxIconId as keyof typeof BOXICONS]
}
