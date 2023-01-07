import { useState } from "react";
import styles from "./home.module.css";
import laptop from "./../../assets/laptop.jpg";
import react from "./../../assets/react.svg";

interface IProject {
  title: string;
  description: string;
  imageURL: string;
}

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

const projects: IProject[] = [
  {
    title: "Project 1 FROM VARIABLE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
    imageURL: `${laptop}`,
  },
  {
    title: "Project 2 ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
    imageURL: `${react}`,
  },
  {
    title: "Project 3 ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
    imageURL: "./images/project3.png",
  },
  {
    title: "Project 4 ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
    imageURL: "./images/project4.png",
  },
];

type ProjectProps = { value: IProject };
type IntroProps = { value: IIntro };

function Intro({ value }: IntroProps) {
  return (
    <div className={styles.h2}>
      <li>{value.title}</li>
    </div>
  );
}

function Project({ value }: ProjectProps) {
  const [like, setLike] = useState(Math.floor(Math.random() * 1000));
  return (
    <div className={styles.project} onClick={() => {}}>
      <div className={styles.title}>{value.title}</div>
      <div className={styles.description}>{value.description}</div>
      <br></br>
      <div className={styles.imageURL}>
        <img
          style={{
            maxWidth: 200,
            maxHeight: 200,
            minHeight: 100,
            minWidth: 100,
          }}
          src={value.imageURL}
        />
      </div>
      <div
        className={styles.like}
        onClick={() => {
          setLike(like + 1);
        }}
      >{`${like} like${like > 1 ? "s" : ""}`}</div>
    </div>
  );
}
export function Home() {
  return (
    <section className={styles.home}>
      <div>
        <h1 className={styles.h1}>
          Information site on various computer subjects such as:
        </h1>
        <div className="intro-wrapper">
          {intro.map((intro) => {
            return <Intro value={intro} />;
          })}
        </div>
        <header className={styles.header}>
          <div>
            <p className={styles.p}>work completed</p>
            <span>4</span>
          </div>
          <div>
            <p className={styles.textPurple}>work in progress</p>
            <span>2</span>
          </div>
        </header>
        <div className={styles.projectWrapper}>
          {projects.map((project) => {
            return <Project value={project} />;
          })}
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <p className={styles.p}>social network</p>
          <span>00</span>
        </div>
        <div>
          <p className={styles.textPurpleFooter}>social network</p>
          <span>00</span>
        </div>
      </footer>
    </section>
  );
}

// const myArray = [1, 432, 5432, 6754, 243, 5324];
// // ternaire : question ? oui : non
// const myMapArray = myArray.map((el) => {
//   console.log(el, "PPROUT");
//   return `concatenation : ${el} prout${el > 1 ? "s" : ""}`;
// });
// const myMapArrayVarnish = myArray.map(
//   (el) => `concatenation : ${el} prout${el > 1 ? "s" : ""}`
// );
// console.log(myArray, myMapArray, myMapArrayVarnish);
