import React from "react";
import img1 from "./images/pexels-павел-сорокин-2324837.jpg";
import img2 from "./images/pexels-chokniti-khongchum-2280551.jpg";
import img3 from "./images/pexels-chokniti-khongchum-2280568.jpg";
import img4 from "./images/pexels-karolina-grabowska-4386495.jpg";
import img5 from "./images/pexels-jonathan-borba-3279196.jpg";
import img6 from "./images/pexels-karolina-grabowska-4386505.jpg";
function Footer() {
  return (
    <footer class="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
      <div class="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          class="dark:text-neutral-400 bold"
          href="https://www.linkedin.com/in/dr-sanjeev-asati-94b05b15b/"
          target="_blank"
        >
          &nbsp;Dr Sanjeev Asati
        </a>
        <br />
        <a class="dark:text-neutral-400">
          Design & Developed by &nbsp;
          <a
            class="dark:text-neutral-400 italic bold"
            href="https://www.linkedin.com/in/pranshu-nayak-0999871a1/"
            target="_blank"
          >
            Pranshu Nayak
          </a>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
