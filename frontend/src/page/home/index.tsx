import { useState } from "react";
import styles from "./page.module.css";

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
    imageURL: "./images/project1.png",
  },
  {
    title: "Project 2 ",
    description: "Lorem2",
    imageURL: "./images/project2.png",
  },
  {
    title: "Project 3 ",
    description: "Prout",
    imageURL: "./images/project3.png",
  },
  {
    title: "Project 4 ",
    description: "reeee",
    imageURL: "./images/project4.png",
  },
];

type ProjectProps = { value: IProject };

function Project({ value }: ProjectProps) {
  const [like, setLike] = useState(Math.floor(Math.random() * 1000));
  return (
    <div className={styles.project} onClick={() => {setLike(like+1)}}>
      <div className="title">{value.title}</div>
      <div className="description">{value.description}</div>
      <div>{`${like} like${like > 1 ? "s" : ""}`}</div>
    </div>
  );
}
export function Home() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.p}>works</p>
          <span>10</span>
        </div>
        <div>
          <p className={styles.textPurple}>other</p>
          <span>1 of 10</span>
        </div>
      </header>
      <div>
        <h2>Projects</h2>
        <div className="project-wrapper">
          {projects.map((project) => {
            return <Project value={project} />;
          })}
        </div>
      </div>
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
