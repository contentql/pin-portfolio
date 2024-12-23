import path from 'path'
import { Page } from 'payload-types'

export type HomePageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type HomeImageType = {
  alt: string
  filePath: string
}
export const homePageData: HomePageDataType = {
  title: 'Home',
  isHome: true,
  _status: 'published',
  layout: [
    {
      blockType: 'Home',
      greetText: `Hey, I'm`,
      name: 'Akhil Naidu',
      description: 'Crafting solutions through the art of code ',
      profilePicture: 0,
      button: 'Say Hi!',
      buttonPath: 'contact',
      socialLinks: [
        { socialIcon: 'facebook', socialIconLink: '/' },
        { socialIcon: 'github', socialIconLink: '/' },
        { socialIcon: 'linkedin', socialIconLink: '/' },
      ],
    },
  ],
}

export const homePageProfileImageData: HomeImageType = {
  alt: 'Profile',
  filePath: path.join(process.cwd(), '/public/images/seed/profile.png'),
}
