import styles from "./footer.module.css";
import linkedin from "./../../../assets/linkedin.png";
import github from "./../../../assets/github.png";
import defcon from "./../../../assets/defcon.png";
import discord from "./../../../assets/discord.png";

interface ISocialNet {
  imageURL: string;
  link: string;
  alt: string;
}

const socialNetwork: ISocialNet[] = [
  {
    imageURL: `${linkedin}`,
    link: "https://www.linkedin.com/",
    alt: "linkedin",
  },
  {
    imageURL: `${github}`,
    link: "https://github.com/",
    alt: "github",
  },
  {
    imageURL: `${defcon}`,
    link: "https://defcon.social/explore",
    alt: "defcon",
  },
  {
    imageURL: `${discord}`,
    link: "https://discord.com/",
    alt: "discord",
  },
];

type SocialNetProps = { value: ISocialNet };

function SocialNet({ value }: SocialNetProps) {
  return (
    <div>
      <span>
        <a href={value.link} target="_blank">
          <img src={value.imageURL} alt={value.alt} height="30" width="30" />
        </a>
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>tipio 2023</p>
      <div className={styles.socialNet}>
        {socialNetwork.map((social) => {
          return <SocialNet value={social} />;
        })}
      </div>
    </footer>
  );
}
