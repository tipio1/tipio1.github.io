import styles from "./home.module.css";
import laptop from "./../../assets/laptop.jpg";
import infinity from "./../../assets/infinity.png";
import react from "./../../assets/react.svg";
import vite from "./../../assets/vite.svg";

// interface declaration: inerface <interface name (IProject)> {id:number; title:string;}
interface IProject {
  id: number;
  date: number;
  title: string;
  description: string;
  imageURL: string;
}

interface IImage {
  imageURL: string;
}

// IProject content declaration: const <const name (projects)> : <interface name>[] = [{<interface content>},{<interface content>},];
const projects: IProject[] = [
  {
    id: 0,
    date: 2021,
    title: "project one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper dictum augue, quis gravida ante molestie non. Ut aliquet dui sit amet dolor molestie, at hendrerit erat pharetra. Sed id leo lacus. Etiam rutrum neque justo. Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo urna, vitae auctor metus orci ut nisi. Fusce malesuada molestie odio a aliquam. Integer ac metus dolor. Praesent pellentesque sem et dapibus placerat. Morbi est mauris, facilisis in pretium et, tempor vitae nibh.",
    imageURL: `${infinity}`,
  },
  {
    id: 1,
    date: 2022,
    title: "project two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper dictum augue, quis gravida ante molestie non. Ut aliquet dui sit amet dolor molestie, at hendrerit erat pharetra. Sed id leo lacus. Etiam rutrum neque justo. Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo urna, vitae auctor metus orci ut nisi. Fusce malesuada molestie odio a aliquam. Integer ac metus dolor. Praesent pellentesque sem et dapibus placerat. Morbi est mauris, facilisis in pretium et, tempor vitae nibh.",
    imageURL: `${infinity}`,
  },
  {
    id: 2,
    date: 2022,
    title: "project three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper dictum augue, quis gravida ante molestie non. Ut aliquet dui sit amet dolor molestie, at hendrerit erat pharetra. Sed id leo lacus. Etiam rutrum neque justo. Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo urna, vitae auctor metus orci ut nisi. Fusce malesuada molestie odio a aliquam. Integer ac metus dolor. Praesent pellentesque sem et dapibus placerat. Morbi est mauris, facilisis in pretium et, tempor vitae nibh.",
    imageURL: `${infinity}`,
  },
];

const imagesCollection: IImage[] = [
  {
    imageURL: `${react}`,
  },
  {
    imageURL: `${laptop}`,
  },
  {
    imageURL: `${vite}`,
  },
];

// props declaration: type <propsname (ProjectProps)> = {value: <interface name>};
type ProjectProps = { value: IProject };
type ImageProps = { value: IImage };

// function to map projects in Home
function Project({ value }: ProjectProps) {
  return (
    <div className={styles.bloc}>
      <div>{value.id}</div>
      <div>{value.date}</div>
      <div>{value.description}</div>
      <div>
        <img src={value.imageURL} width="200" />
      </div>
      <div className={styles.like}>like</div>
    </div>
  );
}

function Images({ value }: ImageProps) {
  return (
    <div>
      <div className={styles.laptopIMG}>
        <img src={value.imageURL} width="200" />
      </div>
    </div>
  );
}

// Home function
export function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <center>sandbox</center>
      </h1>
      <hr></hr>
      <br></br>
      <div className={styles.sandox}>
        <h1 className={styles.h1}>project</h1>
        <p className={styles.p}>
          Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo
          urna, vitae auctor metus orci ut nisi.
        </p>
        <div className={styles.projectBloc}>
          {/* map Project function: {projects.map((project) => {return <Project value={project} />;})} */}
          {projects.map((project) => {
            return <Project value={project} />;
          })}
        </div>
      </div>
      <div>
        <hr></hr>
        <br></br>
        <h1 className={styles.h1}>images collection</h1>
        <p className={styles.p}>
          Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo
          urna, vitae auctor metus orci ut nisi.
        </p>
        <div className={styles.imagesCollection}>
          {imagesCollection.map((image) => {
            return <Images value={image} />;
          })}
        </div>
      </div>
      <hr></hr>
      <br></br>
      <h1 className={styles.h1}>contact form</h1>
      <p className={styles.p}>
        Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo
        urna, vitae auctor metus orci ut nisi.
      </p>
      <form className={styles.form}>
        <table>
          <tr>
            <td>
              <label>date: </label>
            </td>
            <td>
              <input type="date" name="" />
            </td>
          </tr>
          <tr>
            <td>
              <label>firstname: </label>
            </td>
            <td>
              <input type="text" name="firstname" placeholder="firstname" />
            </td>
          </tr>
          <tr>
            <td>
              <label>email: </label>
            </td>
            <td>
              <input type="email" name="email" placeholder="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label>msg: </label>
            </td>
            <td>
              <textarea rows={10} cols={70} placeholder="msg"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={0}>
              <input type="submit" name="send"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
