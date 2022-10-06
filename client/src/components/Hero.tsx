type appProps = {
  setActivePage: (link: string) => any
}

function Hero({setActivePage}: appProps) {
  return (
    <div className="h-screen bg-hero">
      <div className="container px-6 py-20 mx-0">
        <section className=" text-gray-800 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                Ready to start <br />
                <span className="text-blue-600">Barabara's Blog Challenges?</span>
              </h2>
            </div>
            <div className="mb-6 lg:mb-0">
            <p className="text-gray-500 text-lg mb-5 text-center">
                Click the link to checkout the first challenge
              </p>
            <button
              className="
                dropdown-toggle
                px-4
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg active:text-white
                transition
                duration-150
                ease-in-out
                flex
                items-center
                whitespace-nowrap
                justify-center
                mx-auto
                w-2/3
              "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setActivePage('Challenge1')}
            >First Challenge</button>
              
            </div>
          </div>
        </section>
      </div>
      <a className="text-gray-400 fixed right-0 bottom-0" href="https://www.vecteezy.com/free-vector/background">Background Vectors by Vecteezy</a>
    </div>
  )
}
export default Hero