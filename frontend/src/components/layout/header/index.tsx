import at from '../../../assets/at.png';
// import { BiSearchAlt } from 'react-icons/bi';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={at} />
            <p className={styles.p}>Welcome in</p>
            <form className={styles.search}>
                <input placeholder='your research' type="text" />
                <button>
                    {/* <BiSearchAlt size={20} /> */}
                    search
                </button>
            </form>
        </header>
    )
}
