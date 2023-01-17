import laptop from "./../../../assets/laptop.jpg";
import react from "./../../../assets/react.svg";
import vite from "./../../../assets/vite.svg";
import styles from "./carousel.module.css";

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
];

type ImageProps = { value: IImage };

export function Images({ value }: ImageProps) {
  return (
    <div className={styles.carousel}>
      <div className={styles.box}>
        <span>
          <img className={styles.imageURL} src={value.imageURL} />
        </span>
      </div>
      {/* <div className={styles.left}></div>
      <div className={styles.right}></div> */}
    </div>
  );
}
