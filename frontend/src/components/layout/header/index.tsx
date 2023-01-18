import infinity from "../../../assets/infinity.png";
// import { BiSearchAlt } from 'react-icons/bi';
import styles from "./header.module.css";

interface IIntro {
  title: string;
}

const intro: IIntro[] = [
  {
    title: "Cybersecurity",
  },
  {
    title: "System administration",
  },
  {
    title: "Programming",
  },
  {
    title: "Technology watch focused on IT and Cybersecurity",
  },
];

type IntroProps = { value: IIntro };

function Intro({ value }: IntroProps) {
  return (
    <div className={styles.h2}>
      <li>{value.title}</li>
    </div>
  );
}

export function Header() {
  return (
    <header className={styles.header}>
      <img src={infinity} />
      <p className={styles.p}>Work on various IT topics such as:</p>
      <div className={styles.menu}>
        {intro.map((intro) => {
          return <Intro value={intro} />;
        })}
      </div>
      {/* <form className={styles.search}>
        <input placeholder="coming soon" type="text" />
        <button>
          <BiSearchAlt size={20} />
          search
        </button>
      </form> */}
    </header>
  );
}
