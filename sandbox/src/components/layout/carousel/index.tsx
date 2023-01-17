import laptop from "./../../../assets/laptop.jpg";
import react from "./../../../assets/react.svg";
import vite from "./../../../assets/vite.svg";
import styles from "./carousel.module.css";

import { useEffect } from "react";

interface IImage {
  id: number;
  imageURL: string;
}

export const imagesCollection: IImage[] = [
  {
    id: 0,
    imageURL: `${react}`,
  },
  {
    id: 1,
    imageURL: `${laptop}`,
  },
  {
    id: 2,
    imageURL: `${vite}`,
  },
  {
    id: 3,
    imageURL: `${react}`,
  },
  {
    id: 4,
    imageURL: `${laptop}`,
  },
  {
    id: 5,
    imageURL: `${vite}`,
  },
];

type ImageProps = { value: IImage };

export function Images({ value }: ImageProps) {
  let deg = 0;
  let nElements;

  window.onresize = () => {
    responsiveDisplay();
  };

  useEffect(() => {
    responsiveDisplay();
  });

  function responsiveDisplay() {
    let z;
    if (window.innerWidth < 600) z = 190;
    else if (window.innerWidth < 820) z = 250;
    else if (window.innerWidth < 1200) z = 400;
    else if (window.innerWidth < 1600) z = 500;
    else if (window.innerWidth >= 1600) z = 600;

    const span = document.querySelectorAll(".box span");
    span.forEach((element, i) => {
      nElements = span.length;
      const valeur = (360 / nElements) * (i + 1);
      element.style.transform = `rotateY(${value}deg) translateZ(${z}px)`;
    });
  }

  function clickButtonLeft() {
    deg -= 360 / nElements;
    const box = document.querySelectorAll(".box");
    box.style.transform = "perspective(1000px) rotateY(" + deg + "deg)";
  }

  function clickButtonRight() {
    deg += 360 / nElements;
    const box = document.querySelectorAll(".box");
    box.style.transform = "perspective(1000px) rotateY(" + deg + "deg)";
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.box}>
        <span>
          <img className={styles.imageURL} src={value.imageURL} />
        </span>
      </div>
      <div onClick={clickButtonLeft} className={styles.left}></div>
      <div onClick={clickButtonRight} className={styles.right}></div>
    </div>
  );
}
