'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import HomeIcon from "~/components/icons/home-icon";
import SettingsIcon from "~/components/icons/settings-icon";
import UsersIcon from "~/components/icons/users-icon";

export function SidebarApp() {
  const i18n = {
    sidebar_app: {
      home: 'Home',
      users: 'Users',
      settings: 'Settings',
    }
  }

  return (
    <aside id='main-sidebar' className="w-12 flex flex-col bg-gray-900 border-r border-gray-800">
      <div className='flex items-center justify-center h-12'>
        <Link
          href={'home'}
          aria-label='Link to home module'
          className="h-10 w-10 flex items-center justify-center rounded-full"
        >
          <span className="font-bold">BT</span>
        </Link>
      </div>

      <nav aria-label="Main navigation">
        <ul className="grid gap-1 justify-center">
          <NavLink href='home' nameModule={i18n.sidebar_app.home}>
            <HomeIcon width={26} height={26} className='fill-white' />
          </NavLink>

          <NavLink href='users' nameModule={i18n.sidebar_app.users}>
            <UsersIcon width={26} height={26} className='fill-white' />
          </NavLink>

          <NavLink href='settings' nameModule={i18n.sidebar_app.settings}>
            <SettingsIcon width={26} height={26} className='fill-white' />
          </NavLink>
        </ul>
      </nav>
    </aside>
  )
}

interface NavLinkProps {
  children: ReactNode
  href: string
  nameModule: string
}

function NavLink ({ children, href, nameModule }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === `/${href}`;

  return (
    <li className={`rounded-md h-8 w-8 flex items-center justify-center ${isActive ? 'bg-cyan-700' : 'bg-gray-900 hover:brightness-150'}`}>
      <Link aria-label={`Link to ${nameModule} module`} href={href}>
        { children }
      </Link>
    </li>
  )
}
