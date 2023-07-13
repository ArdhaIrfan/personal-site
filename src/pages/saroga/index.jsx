import styles from '../../style/Saroga.module.css'
import constructionSvg from "../../assets/construction.svg"
import { Link } from 'react-router-dom'

const Saroga = () => {
	return (
		<>
			<main className={styles.main}>
				<img src={constructionSvg} alt="Under Construction" />
				<p>This page is under construction.</p>
				<Link to='/' className={`${styles.btn} ${styles.btnSecondary}`}>Back to Home Page</Link>
			</main>
		</>
	)
}

export default Saroga