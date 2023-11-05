import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <header className="flex flex-wrap items-start justify-center md:justify-between py-3 mb-4 border-b">
        <img className='md:w-1/6 pr-4 pl-4 px-2' src='pinatalogo.png' ></img>
        <a
          href="/"
          className="flex items-center md:w-1/5 pr-4 pl-4 mb-2 md:mb-0 text-gray-900 text-decoration-none"
        ></a>
        <ul className="flex flex-wrap list-none pl-0 w-4/5 col-md-auto mb-2 justify-center md:mb-1">
          <li>
            <a href="/" className="inline-block py-2 px-4 no-underline link-dark" style={{fontFamily:'SF Pro Display', fontWeight:"bold", fontSize:'20px'}}>
              Listed
            </a>
          </li>
          <li>
            <a href="list" className="inline-block py-2 px-4 no-underline link-dark" style={{fontFamily:'SF Pro Display', fontWeight:"bold", fontSize:'20px'}}>
              List My Property!
            </a>
          </li>
        </ul>
      </header>
      <Component {...pageProps} />
    </div>
  )
}
