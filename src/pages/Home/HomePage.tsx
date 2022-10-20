import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SocialLink {
  icon: IconProp
  label: string
  href: string
}

export default function HomePage() {
  const socialLinks: SocialLink[] = [
    {
      icon: ['fab', 'github'],
      label: 'GitHub',
      href: 'https://github.com/nat212',
    },
    {
      icon: ['fab', 'linkedin'],
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/natasha-draper/',
    },
    {
      icon: ['fab', 'stack-overflow'],
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/16027281/natash',
    },
  ]

  const dateStarted = new Date('2017-04-01')
  const today = new Date()

  const yearDifference = (a: Date, b: Date): number => {
    // Convert difference to seconds
    const diffYear = (a.getTime() - b.getTime()) / 1000
      // Seconds -> hours -> days
      / (3600 * 24)
      // Days -> years
      / 365.25
    return Math.abs(Math.round(diffYear))
  }

  const yearsWorked = yearDifference(today, dateStarted)

  return (
    <>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-secondary shadow-xl transition-all hover:border-secondary-focus hover:shadow-2xl">
          <img src="/face.jpeg" alt="Portrait" />
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-2">
          <h1 className="text-5xl font-light text-white">Natasha Draper</h1>
          <h2 className="text-4xl font-light text-zinc-400">
            Software Developer
          </h2>
<div className="mt-4 flex flex-row items-center justify-start gap-3 md:mt-0">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={href}
                href={href}
                className="border-b border-b-current text-primary transition-all hover:text-primary-focus"
                target="_blank">
                <FontAwesomeIcon icon={icon} className="mr-2" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p>
        I am a frontend developer with over {yearsWorked} years experience in the Software
        Development industry. I currently specialise in Angular, but have
        experience with React, Next.js, Knockout.js, and Vue. I have two
        adorable cats, and I am a huge fan of craft gin! I dabble in graphic
        design, and have picked up a few skills, mostly relating to UI/UX
        design.
      </p>
    </>
  )
}
