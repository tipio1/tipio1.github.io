import styles from "./home.module.css";
import laptop from "./../../assets/laptop.jpg";

// interface

// IProject

// type

// function

export function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.h1}>sandox</h1>
      <p className={styles.p}>
        Praesent pellentesque sem et dapibus placerat. Morbi est mauris,
        facilisis in pretium et, tempor vitae nibh.
      </p>
      <br></br>
      <div className={styles.sandox}>
        <div className={styles.bloc}>
          <div className={styles.button}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper dictum augue, quis gravida ante molestie non. Ut aliquet
            dui sit amet dolor molestie, at hendrerit erat pharetra. Sed id leo
            lacus. Etiam rutrum neque justo. Fusce euismod, tortor egestas
            imperdiet convallis, orci leo commodo urna, vitae auctor metus orci
            ut nisi. Fusce malesuada molestie odio a aliquam. Integer ac metus
            dolor. Praesent pellentesque sem et dapibus placerat. Morbi est
            mauris, facilisis in pretium et, tempor vitae nibh.
            <br></br>
            <div className={styles.like}>like</div>
          </div>
          <div className={styles.button}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper dictum augue, quis gravida ante molestie non. Ut aliquet
            dui sit amet dolor molestie, at hendrerit erat pharetra. Sed id leo
            lacus. Etiam rutrum neque justo. Fusce euismod, tortor egestas
            imperdiet convallis, orci leo commodo urna, vitae auctor metus orci
            ut nisi. Fusce malesuada molestie odio a aliquam. Integer ac metus
            dolor. Praesent pellentesque sem et dapibus placerat. Morbi est
            mauris, facilisis in pretium et, tempor vitae nibh.
            <br></br>
            <div className={styles.like}>like</div>
          </div>
          <div className={styles.button}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper dictum augue, quis gravida ante molestie non. Ut aliquet
            dui sit amet dolor molestie, at hendrerit erat pharetra. Sed id leo
            lacus. Etiam rutrum neque justo. Fusce euismod, tortor egestas
            imperdiet convallis, orci leo commodo urna, vitae auctor metus orci
            ut nisi. Fusce malesuada molestie odio a aliquam. Integer ac metus
            dolor. Praesent pellentesque sem et dapibus placerat. Morbi est
            mauris, facilisis in pretium et, tempor vitae nibh.
            <br></br>
            <div className={styles.like}>like</div>
          </div>
        </div>
   
      </div>
      <div className={styles.laptopIMG}>
      <img src={laptop} width="250" />
      </div>
      <h1 className={styles.h1}>contact form</h1>
      <p className={styles.p}>
        Fusce euismod, tortor egestas imperdiet convallis, orci leo commodo
        urna, vitae auctor metus orci ut nisi. Fusce malesuada molestie odio a
        aliquam. Integer ac metus dolor. Praesent pellentesque sem et dapibus
        placerat. Morbi est mauris, facilisis in pretium et, tempor vitae nibh.
      </p>
      <br></br>
      <hr></hr>
      <br></br>
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
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <input type="submit"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
