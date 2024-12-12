export type TAbout = {
  type: string
  description: string[]
}

export const ABOUT_HEADER = {
  heading: 'About Me',
  subHeading: 'Get to know me better - my story, interests, and aspirations'
}

export const ABOUT: TAbout[] = [
  {
    type: 'summary',
    description: [
      "Hi, I'm Akhil Naidu. I'm an open source contributor and fullstack developer from Vizag, India."
    ]
  },
  {
    type: 'education',
    description: [
      "I completed my schooling from Dr. KKR's Gowtham Concept School.",
      "I'm a B.Tech. graduate from IIT Guwahati"
    ]
  },
  {
    type: 'interests',
    description: [
      'My primary interest lies in software development, especially web and mobile.',
      'Apart from that, I enjoy competitive programming and teaching.',
      'I take an active interest in technology, business, and geo-politics, as well as how they intersect to affect society.'
    ]
  },
  {
    type: '! working',
    description: [
      "When I'm not working on my computer, I enjoy watching anime, listening music, playing CS:GO and sleeping."
    ]
  }
]
