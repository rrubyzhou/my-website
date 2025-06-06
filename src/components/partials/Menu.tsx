import { Theme, useTheme } from '@/hooks/use-theme';
import { Dialog, Switch, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';

const Menu = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="header text-gray-700 dark:text-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        <Link href="/">
          <a className="text-3xl  font-bold">
            <span className="font-bold text-3xl bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">Ruby</span>
            <span className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent ml-1">Zhou.</span>
          </a>
        </Link>
        <nav className="w-full flex justify-end items-center py-6 px-10">
          <ul className="flex gap-8 text-lg font-bold text-pink-600">
            <li>
              <a
                href="#about"
                className="hover:text-pink-400 cursor-pointer"
                onClick={e => handleSmoothScroll(e, 'about')}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="hover:text-pink-400 cursor-pointer"
                onClick={e => handleSmoothScroll(e, 'experiences')}
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-pink-400 cursor-pointer"
                onClick={e => handleSmoothScroll(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-400 cursor-pointer"
                onClick={e => handleSmoothScroll(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="ml-auto transition-colors duration-150 hover:text-primary-500 md:-mt-0.5 md:ml-3"
          onClick={() => toggleTheme()}
        >
          {theme === Theme.LIGHT ? <BsMoonStars size={20} style={{ color: '#ff4c60' }} /> : <BsSun size={20} />}
        </button>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-5 flex text-gray-700 dark:text-gray-200 md:hidden"
        >
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex h-full w-full max-w-xs flex-1 flex-col bg-[#f9f9ff] pt-5 dark:bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-white">&#10006;</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="border-b px-2 pb-4 dark:border-gray-700">
                  <Link href="/">
                    <a className="text-3xl  font-bold">
                      <span className="font-bold text-3xl bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">Ruby</span>
                      <span className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent ml-1">Zhou.</span>
                    </a>
                  </Link>
                </div>
                <nav className="mt-4 space-y-1 px-2">
                  <Link href="/works">
                    <a
                      className={classNames(
                        'group flex items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-primary-600',
                        { 'text-primary-500': router.asPath == '/works' }
                      )}
                    >
                      Works
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a
                      className={classNames(
                        { 'text-primary-500': router.asPath == '/blog' },
                        'group flex items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-primary-600'
                      )}
                    >
                      Blog
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={classNames(
                        { 'text-primary-500': router.asPath == '/contact' },
                        'group flex items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-primary-600 '
                      )}
                    >
                      Contact
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Menu;
