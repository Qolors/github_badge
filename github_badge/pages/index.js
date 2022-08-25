

export default function Home() {
  return (
    //HEADER
    <div className="w-full flex flex-col">
      <div className="top-0 left-0 w-full p-6 flex justify-between">
        <h2 className="text-2xl text-white">devfinder</h2>
        <div className=" text-white gap-2 items-center flex justify-center">
          <h2>LIGHT</h2>
          <h2>ICO</h2>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-lg mx-6 mt-12 bg-white/10">
          <input type="search" className="form-control relative flex h-16 min-w-0 block w-full px-6 py-1.5 text-base font-normal text-white bg-transparent bg-clip-padding rounded-lg transition ease-in-out focus:text-white focus:border-blue-600 focus:outline-none" placeholder="Search User.." aria-label="Search" aria-describedby="button-addon2" />
          <button className="inline-block px-6 py-6 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
          </button>
      </div>
    //CARD
      <div className="bg-white/10 min-h-[500px] flex flex-col rounded-lg mx-6 p-2">

      </div>
    </div>
    
  )
}
