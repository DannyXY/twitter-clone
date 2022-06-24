import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <aside className="col-span-1 2xl:justify-items-end hidden sm:block dark:bg-slate-900">
            <div className="fixed w-4/5 inset-y-0 2xl:relative ml-3 left-15 xl:ml-14 lg:ml-20 md:ml-16 right-auto" >
                <div>
                    <a href="#"
                        className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-sky-200 dark:hover:bg-slate-800 hover:text-sky-200">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-9 fill-sky-500">
                            <g>
                                <path
                                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
                <div className="mt-2">
                    <ul className="flex justify-center w-fit flex-col dark:text-white">
                        <li className="">
                            <Link to={'/'}>
                            <a href="#"
                                className="xl:w-36 h-14  w-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z">
                                            </path>
                                            <path
                                                d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">Home</p>
                            </a></Link></li>
                        <li className="mt-2"><a href="#"
                                className="2xl:w-40 h-14  w-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">Explore</p>
                            </a></li>
                        <li className="mt-2"><a href="#"
                                className="2xl:w-56 h-14  w-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">Notifications</p>
                            </a></li>
                        <li className="mt-2"><a href="#"
                                className="xl:w-56 h-14  w-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">Messages</p>
                            </a></li>
                        <li className="mt-2"><a href="#"
                                className="2xl:w-56 xl:h-14  w-14 h-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline ">Bookmarks</p>
                            </a></li>
                        <li className="mt-2"><a href="#"
                                className="2xl:w-36 2xl:h-14  w-14 h-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z">
                                            </path>
                                            <path
                                                d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">Lists</p>
                            </a></li>
                        <li className="mt-2">
                                                        
                            <a href="#"
                                className="2xl:w-48 h-14  w-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current">
                                        <g>
                                            <path
                                                d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">Profiles</p>
                            </a></li>
                        <li className="mt-2"><a href="#"
                                className="2xl:w-36 h-14  w-14 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-8 fill-current m-auto">
                                        <g>
                                            <circle cx="17" cy="12" r="1.5"></circle>
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="7" cy="12" r="1.5"></circle>
                                            <path
                                                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl ml-4 hidden 2xl:inline">More</p>
                            </a></li>
                        <li className="mt-2 2xl:hidden"><a href="#"
                                className="w-14 h-14 justify-center p-3 bg-sky-500 flex items-center rounded-full"><span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="#ffffff" className="w-9 h-8 fill-white-800">
                                        <g>
                                            <path
                                                d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                            </a></li>
                        <li className="mt-2 hidden 2xl:inline"><a href="#"
                                className="w-60 h-14 p-3 mt-2 bg-sky-500 hover:bg-sky-600 flex items-center rounded-full">
                                <p className="text-2xl mx-auto text-white font-bold">Tweet</p>
                            </a></li>
        
                    </ul>
                    <div className="flex mt-14 w-72 items-center ">
                        <a href=""
                            className="flex mt-2 p-3 w-72 items-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 w-72 h-16 rounded-full">
                            <img src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_normal.jpg" alt="logo"
                                className="rounded-full w-12 h-12 mr-3"></img>
                            <div className="hidden xl:w-3/5 2xl:block">
                                <p className="text-lg font-bold dark:text-white">Dammit</p>
                                <p className="text-gray-500 dark:text-gray-400">@babyOtunba</p>
                            </div>
                            <span className="hidden 2xl:inline"><svg viewBox="0 0 24 24" aria-hidden="true"
                                    className="w-9 h-8 fill-current dark:text-gray-400">
                                    <g>
                                        <circle cx="5" cy="12" r="2"></circle>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <circle cx="19" cy="12" r="2"></circle>
                                    </g>
                                </svg></span>
                                </a>
                    </div>
                    
                </div>
            </div>
        </aside>
  )
}
