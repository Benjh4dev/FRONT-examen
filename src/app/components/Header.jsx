import Link from 'next/link'

export default function Header ()  {
    return (
      <header className="bg-blue-500 p-4 text-bold text-xl">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" passHref>
            Home
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/new" passHref>
                New
              </Link>
            </li>
            <li>
              <Link href="/pages" passHref>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };