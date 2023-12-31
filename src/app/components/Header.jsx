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
              <Link href="/bookings" passHref>
                Bookings
              </Link>
            </li>
    
          </ul>
        </nav>
      </header>
    );
  };