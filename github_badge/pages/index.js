import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"

export default function Home({ props }) {

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(props.name)
  }, [props])

  return (
    //HEADER
    <div className="w-full flex flex-col">
      <div className="top-0 left-0 w-full p-6 flex justify-between">
        <h2 className="text-2xl text-white">devfinder</h2>
        <div className=" text-white gap-2 items-center flex justify-center">
          <h2>LIGHT</h2>
          <Icon icon="bxs:sun" className="w-5 h-5" />
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
      <div className="bg-white/10 min-h-[500px] mt-6 flex flex-col rounded-lg mx-6 p-2">
        <div className="flex w-full items-center gap-3">
          <img src="https://avatars.githubusercontent.com/u/100877513?v=4" className="m-2 rounded-full w-20 h-20" />
          <div className="flex text-white justify-between flex-col">
            <h2>{user}</h2>
            <h3 className=" text-blue-500">@Qolors</h3>
            <h3 className="text-sm">Joined 25 Jan 2021</h3>
          </div>
        </div>
        <p className=" my-6 font-thin text-white/80 break-words indent-2 text-left mx-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Blandit massa enim nec dui.
        </p>
        <div className="mx-2 px-6 py-8 flex bg-[#141c2f] rounded-lg justify-between items-center">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/80">Repos</h3>
            <h2 className="text-white font-bold">8</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/80">Followers</h3>
            <h2 className="text-white font-bold">2938</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/80">Following</h3>
            <h2 className="text-white font-bold">9</h2>
          </div>
        </div>
        <ul className="list-none flex text-medium flex-col gap-2 mx-2 my-6 text-white">
          <li><span className="flex items-center gap-4"><Icon icon="bx:map" /><h3>Ann Arbor</h3></span></li>
          <li><span className="flex items-center gap-4"><Icon icon="entypo:link" /><h3>www.mcgowen.work</h3></span></li>
          <li><span className="flex items-center gap-4"><Icon icon="ant-design:twitter-outlined" /><h3>@qolorscode</h3></span></li>
          <li><span className="flex items-center gap-4"><Icon icon="bi:building" /><h3>Google Inc.</h3></span></li>
        </ul>

      </div>
    </div>
    
  )
}


export async function getServerSideProps() {
  const url = `https://api.github.com/users/qolors`
  const result = await fetch(url).then(res => res.json())

  if (result.length) {
    return {
      props: {
        name: result.login,
      },
    }
  }

}
