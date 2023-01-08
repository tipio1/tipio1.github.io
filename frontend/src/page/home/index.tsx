import { useState } from "react";
import styles from "./home.module.css";
import laptop from "./../../assets/laptop.jpg";
import react from "./../../assets/react.svg";

interface IProject {
  title: string;
  description: string;
  imageURL: string;
}

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
        <h1 className={styles.h1}>Work completed:</h1>
        <header className={styles.header}>
          <div>
            <span>4</span>
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
          <p className={styles.textPurpleFooter}>Work in progress</p>
          <span>2</span>
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
