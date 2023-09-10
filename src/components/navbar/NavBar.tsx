"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import DesktopMenu from './DesktopMenu';
import DisclosureMenu from './DisclosureMenu';
import{ Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Disclosure as="header" className="bg-background dark:bg-accent sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
      {({ open }) => (
        <>
          <div className="max-w-8xl lg:py-5">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex">
                <div className="flex flex-shrink-0 items-center text-primary dark:text-secondary text-xl lg:text-2xl">
                  <Link to="/">
                    <span className='font-bold'>Summarizer</span> {` Machine`}
                  </Link>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-secondary hover:text-accent dark:text-secondary dark:hover:bg-primary dark:hover:text-background focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent focus:ring-background">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <DesktopMenu/>
            </div>
          </div>

          <DisclosureMenu/>
        </>
      )}
    </Disclosure>
  )
}
