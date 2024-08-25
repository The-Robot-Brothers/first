import Link from "next/link";

export function HeaderApp() {
  return (
    <header id='main-header' className="bg-gray-900 h-12 flex justify-between items-center p-2 border-b border-gray-800">
      <Link href="/">
        Brother&apos;s Tech
      </Link>

      <nav aria-label="Main navigation">
        <ul>
          <li className="h-10 w-10 bg-cyan-700 rounded-full flex items-center justify-center hover:bg-cyan-600">
            <div className='flex items-center justify-center h-12'>
              <Link
                href={'/'}
                aria-label='Link to home module'
                className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-700 hover:bg-cyan-600"
              >
                <span className="font-bold">BT</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
