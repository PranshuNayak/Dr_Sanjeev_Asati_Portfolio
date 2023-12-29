import React from "react";
import { Link as ScrollLink } from "react-scroll";
import HomeButton from "./HomeButton";
import img1 from "./images/img1.jpeg";

function Home() {
  return (
    <section class="mb-40" id="home">
      <HomeButton />
      <nav
        class="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <div class="flex items-center">
          

            <a class="sm:inline hidden text-primary dark:text-primary-400" href="#!">
              <span class="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="300.000000pt"
                  height="300.000000pt"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                  </metadata>
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M1255 2720 c-163 -34 -320 -99 -458 -191 -85 -58 -273 -249 -329
-334 -143 -220 -208 -438 -208 -695 0 -532 328 -992 838 -1174 l73 -26 -19 27
c-25 36 -126 139 -224 228 -91 84 -126 137 -174 264 -20 53 -56 140 -80 193
-57 127 -59 172 -5 143 67 -35 156 -177 145 -233 -4 -22 2 -38 28 -72 40 -52
218 -217 218 -202 0 6 -45 52 -101 104 -120 110 -157 168 -110 168 31 0 102
-34 230 -110 306 -180 421 -332 378 -497 l-14 -53 54 0 c48 0 53 2 45 18 -31
59 -16 189 30 256 58 85 161 170 328 271 166 101 260 137 260 102 0 -26 -57
-92 -129 -151 -65 -53 -99 -92 -89 -101 7 -7 197 176 218 210 15 24 20 44 15
63 -8 37 41 134 96 190 33 33 49 42 76 42 19 0 33 -3 31 -7 -2 -5 -18 -39 -36
-78 -18 -38 -58 -133 -88 -210 -78 -196 -101 -230 -242 -355 -79 -70 -197
-199 -189 -206 7 -8 154 48 230 87 128 65 226 136 328 238 187 187 288 379
348 666 40 190 22 396 -56 620 -75 216 -208 404 -388 549 -180 145 -338 218
-564 260 -116 22 -348 20 -466 -4z m517 -39 c240 -57 472 -195 626 -370 272
-308 370 -700 278 -1101 -24 -105 -104 -284 -167 -376 -81 -119 -215 -256
-304 -312 -22 -14 -42 -29 -45 -33 -10 -14 -205 -107 -213 -102 -5 3 43 54
106 114 132 125 157 161 216 314 24 61 53 133 66 160 76 165 76 167 44 201
-17 18 -26 20 -56 14 -34 -8 -78 -40 -97 -70 -18 -29 -23 21 -8 97 12 69 12
76 -4 94 -23 25 -35 24 -110 -11 -61 -30 -94 -62 -108 -107 -4 -12 -17 -25
-29 -29 -45 -14 -55 -36 -92 -199 -9 -38 -20 -79 -25 -90 -4 -11 -13 -33 -19
-50 -8 -20 -31 -42 -68 -65 -80 -49 -205 -176 -237 -238 -14 -29 -30 -52 -34
-52 -5 0 -19 24 -33 53 -29 63 -139 175 -230 234 -63 41 -66 46 -87 110 -17
53 -42 149 -51 198 -8 39 -37 85 -62 95 -19 8 -39 31 -57 64 -22 41 -35 54
-69 66 -24 9 -48 21 -55 28 -17 17 -54 15 -73 -5 -12 -12 -15 -26 -11 -52 13
-79 18 -141 11 -141 -4 0 -25 16 -46 35 -49 44 -91 47 -116 9 -19 -30 -11 -73
31 -166 29 -64 62 -146 83 -208 36 -107 105 -199 233 -311 34 -30 66 -62 71
-71 9 -16 7 -17 -18 -7 -103 38 -251 138 -362 243 -62 59 -171 196 -171 215 0
5 -4 11 -8 13 -12 4 -84 152 -110 223 -49 135 -65 231 -66 400 -1 171 6 217
55 375 66 213 176 379 360 545 63 57 104 86 189 135 138 78 266 123 430 150
88 15 348 4 442 -19z m-928 -1403 c20 -32 53 -146 75 -261 l18 -99 -21 7 c-11
3 -35 8 -52 12 l-32 5 -7 115 c-6 102 -19 175 -40 226 -11 27 41 23 59 -5z
m1361 5 c-21 -49 -34 -122 -41 -226 l-7 -115 -31 -6 c-17 -3 -41 -8 -52 -11
-21 -7 -21 -6 -9 67 24 136 62 265 87 296 6 6 22 12 35 12 20 0 24 -4 18 -17z
m-1259 -78 c23 -50 79 -304 72 -326 -2 -5 -17 -1 -33 9 -27 17 -31 27 -43 101
-12 73 -47 207 -67 254 -6 14 -2 17 19 17 23 0 31 -8 52 -55z m1169 38 c-31
-74 -75 -254 -75 -308 0 -16 -11 -30 -34 -44 -18 -12 -35 -21 -38 -21 -7 0 39
238 57 294 23 69 43 96 72 96 20 0 24 -4 18 -17z m-1074 -130 c5 -15 22 -77
36 -138 14 -60 32 -123 40 -138 8 -16 13 -30 11 -32 -2 -2 -22 8 -44 22 l-40
26 -26 136 c-15 74 -24 139 -22 143 11 17 35 7 45 -19z m948 13 c8 -9 8 -22 2
-37 -4 -13 -17 -72 -27 -130 l-18 -106 -40 -26 c-22 -14 -42 -25 -43 -23 -2 2
4 20 12 40 9 21 27 88 41 148 33 145 45 168 73 134z"
                    />
                    <path
                      d="M1393 2658 c-33 -41 -40 -206 -14 -291 34 -110 36 -128 34 -267 -2
-178 -6 -224 -27 -274 -9 -21 -16 -51 -16 -67 0 -15 -7 -35 -16 -43 -8 -9 -18
-33 -21 -53 -3 -21 -19 -66 -35 -100 -25 -52 -28 -65 -18 -84 10 -17 9 -30 0
-59 -7 -22 -10 -54 -6 -76 4 -22 10 -70 15 -109 5 -46 17 -86 34 -118 15 -26
27 -58 27 -70 0 -33 40 -85 85 -110 l40 -23 0 -65 c0 -77 15 -104 53 -94 27 7
53 34 78 79 12 22 14 42 9 75 -4 25 -6 60 -6 78 1 18 -8 48 -20 67 -16 27 -19
44 -13 84 5 41 3 50 -11 56 -17 6 -17 8 -2 19 9 6 21 24 26 39 9 23 6 30 -14
50 -30 28 -32 59 -5 83 23 21 26 63 6 90 -12 16 -12 23 -1 38 16 23 9 53 -18
72 -19 13 -19 14 9 38 27 24 28 27 18 65 -9 33 -8 43 8 62 13 16 17 32 13 48
-3 13 0 39 6 57 9 25 10 43 2 69 -9 28 -8 36 3 40 18 7 18 73 -1 106 -18 32
-19 41 -2 34 20 -7 43 24 29 38 -7 7 -12 20 -12 29 0 9 -7 22 -15 29 -8 7 -13
15 -11 19 7 11 -55 35 -63 24 -4 -7 -93 -43 -107 -43 -1 0 -4 12 -7 26 -5 27
1 32 48 36 17 2 35 9 41 17 9 11 19 9 60 -14 49 -28 49 -29 27 -4 -13 14 -23
33 -23 42 0 9 -9 22 -20 30 -11 8 -17 17 -12 22 4 4 -1 5 -10 2 -10 -4 -18 -4
-18 0 0 3 8 12 18 19 16 12 16 14 -7 37 -12 14 -21 30 -17 35 9 15 -41 32 -74
25 -17 -3 -33 -10 -36 -14 -10 -16 -22 -9 -26 15 -4 21 0 25 37 33 35 8 46 7
65 -9 35 -28 43 -23 38 27 -3 25 -2 45 3 45 20 0 7 38 -24 68 -35 34 -86 43
-104 20z m97 -37 c19 -16 32 -33 28 -37 -4 -4 -15 -1 -24 7 -9 7 -35 15 -57
16 -47 3 -49 5 -41 27 10 25 55 19 94 -13z m-26 -51 c16 -17 33 -30 38 -30 4
0 8 -7 8 -16 0 -13 -4 -13 -27 4 -20 13 -39 18 -65 14 -36 -4 -38 -3 -38 23 0
24 3 27 25 23 13 -3 22 -1 19 3 -12 20 13 6 40 -21z m26 -135 c0 -9 11 -21 25
-27 28 -13 35 -34 8 -23 -39 16 -51 16 -88 1 -47 -20 -45 -21 -45 9 0 18 5 25
19 25 11 0 23 5 26 11 4 6 13 8 21 5 8 -3 14 -1 14 4 0 6 5 10 10 10 6 0 10
-7 10 -15z m14 -90 c3 -8 13 -15 23 -15 23 0 49 -17 41 -25 -4 -4 -23 -2 -42
5 -30 10 -41 9 -68 -5 -30 -15 -34 -15 -45 1 -16 22 -9 32 30 43 46 13 54 13
61 -4z m4 -147 c-5 -16 -58 -24 -58 -9 0 8 13 13 53 20 5 0 7 -5 5 -11z m76
-8 c14 -5 26 -15 26 -21 0 -7 7 -20 16 -30 10 -11 12 -19 5 -23 -6 -4 -16 2
-23 14 -15 23 -78 29 -78 7 0 -7 -18 -18 -41 -24 -37 -10 -41 -9 -49 11 -10
26 5 46 34 46 11 0 32 7 46 14 32 18 34 18 64 6z m-64 -95 c0 -11 -10 -15 -37
-14 l-38 1 30 13 c39 18 45 18 45 0z m94 -90 l8 -40 -26 28 c-27 29 -44 34
-51 15 -3 -8 -25 -13 -55 -14 -40 -1 -50 2 -50 15 0 9 -3 26 -6 38 -6 21 -3
22 55 20 44 -2 62 2 66 12 9 23 51 -29 59 -74z m-94 -30 c0 -10 -11 -15 -35
-15 -39 0 -48 16 -12 23 41 8 47 7 47 -8z m-17 -32 c20 2 39 6 43 10 11 10 24
9 24 -4 0 -6 7 -17 15 -25 17 -17 20 -70 5 -79 -5 -3 -12 6 -16 20 -6 25 -31
33 -49 17 -6 -5 -31 -7 -57 -4 l-47 4 4 36 c2 21 4 38 4 40 1 1 9 -2 19 -7 11
-6 35 -9 55 -8z m-24 -79 c33 -7 40 -18 16 -28 -19 -7 -65 10 -65 24 0 12 6
12 49 4z m23 -39 c31 -1 63 -7 72 -14 18 -15 21 -56 6 -66 -5 -3 -10 0 -10 8
0 15 -53 31 -58 19 -12 -32 -21 -32 -119 -6 -10 3 -9 12 5 38 12 25 21 34 32
29 8 -4 40 -7 72 -8z m-48 -85 c23 -8 38 -40 19 -40 -21 0 -83 22 -83 29 0 22
24 26 64 11z m104 -49 c12 -17 19 -37 16 -45 -8 -20 -20 -20 -28 -1 -3 8 -10
15 -16 15 -5 0 -10 -7 -10 -15 0 -9 -9 -15 -24 -15 -13 0 -26 -5 -28 -12 -3
-9 -12 -9 -38 0 -18 7 -46 12 -61 12 -33 0 -35 5 -13 49 14 28 20 32 43 25 78
-21 98 -21 110 -2 15 25 24 23 49 -11z m-125 -87 c9 -3 17 -12 17 -19 0 -11
-12 -13 -52 -8 -63 7 -60 6 -52 27 6 17 26 17 87 0z m125 -47 c20 -15 14 -37
-11 -37 -12 0 -28 -9 -35 -20 -7 -11 -22 -20 -35 -20 -13 0 -28 -5 -33 -10 -7
-7 -30 -6 -70 1 -89 16 -85 13 -67 58 14 37 20 41 50 41 18 0 50 -7 70 -15 46
-19 53 -19 53 3 0 10 3 21 6 25 6 6 49 -10 72 -26z m10 -115 c5 -35 -6 -58
-20 -44 -19 19 -29 14 -23 -11 9 -33 -16 -51 -60 -43 -28 6 -35 4 -35 -9 0
-13 -12 -15 -67 -13 l-68 3 0 45 0 45 65 0 c36 0 70 3 77 8 6 4 14 3 18 -3 9
-15 25 -2 25 20 0 13 9 20 28 23 45 7 57 3 60 -21z m-170 12 c43 -12 22 -26
-30 -21 -65 6 -60 5 -53 17 7 11 48 13 83 4z m148 -155 c36 -22 42 -37 22 -57
-17 -17 -48 -15 -48 3 0 8 -4 15 -10 15 -5 0 -10 -12 -10 -26 0 -20 -4 -24
-19 -19 -13 4 -20 1 -23 -11 -2 -10 -25 -23 -63 -35 -76 -24 -75 -24 -75 9 0
15 -4 34 -10 42 -17 27 9 40 77 40 51 0 65 3 70 18 7 18 32 41 47 42 5 0 24
-9 42 -21z m-139 0 c38 -14 14 -29 -49 -29 -41 0 -48 3 -48 20 0 16 7 20 34
20 19 0 47 -5 63 -11z m149 -123 c21 -16 21 -17 -21 -39 -29 -16 -29 -17 -7
-23 15 -4 22 -14 22 -32 0 -14 9 -36 21 -48 17 -18 19 -25 8 -42 -10 -16 -9
-24 4 -43 22 -31 21 -61 -2 -107 -24 -47 -56 -76 -75 -69 -12 5 -13 18 -9 64
3 32 10 63 15 69 12 16 -17 44 -44 44 -27 0 -98 74 -98 103 0 16 13 29 47 47
26 14 52 34 58 45 25 50 44 57 81 31z m-96 -31 c-18 -21 -88 -57 -99 -51 -5 3
-11 15 -14 25 -4 17 4 23 52 39 59 19 83 14 61 -13z"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </div>

          <div
            class=" flex-grow  items-center flex basis-auto"
          >
            <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>
              <li data-te-nav-item-ref>
                <ScrollLink
                  class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>
              <li data-te-nav-item-ref>
                <ScrollLink
                  class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                  to="bio"
                  smooth={true}
                  duration={500}
                >
                  Bio
                </ScrollLink>
              </li>
              <li data-te-nav-item-ref>
                <ScrollLink
                  class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                  to="services"
                  smooth={true}
                  duration={500}
                >
                  Services
                </ScrollLink>
              </li>
              <li data-te-nav-item-ref>
                <ScrollLink
                  class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                  to="testimonials"
                  smooth={true}
                  duration={500}
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li data-te-nav-item-ref>
                <ScrollLink
                  class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Message
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div class="my-1 lg:flex hidden items-center">
            <button
              type="button"
              class="inline-block rounded bg-teal-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              We care for you
            </button>
          </div>
        </div>
      </nav>

      <div class="px-6 py-12 text-center md:px-12 lg:text-left">
        <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div class="grid items-center lg:grid-cols-2">
            <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h1 class="mt-2 mb-2 capitalize text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                  get best solutions
                </h1>
                <h1 class="capitalize text-xl mb-4 tracking-tight ">
                  for your spine related problems
                </h1>
                <ScrollLink
                  class="mb-2 inline-block rounded bg-teal-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  to="bio"
                  smooth={true}
                  duration={500}
                >
                  Know your doctor
                </ScrollLink>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <img
                src={img1}
                class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
