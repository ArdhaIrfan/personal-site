import styles from '../../style/CoffeeSHop.module.css'
import constructionSvg from "../../assets/construction.svg"

const CoffeeShop = () => {
    return (
		<>
			<main className={styles.main}>
				<img src={constructionSvg} alt="Under Construction" />
				<p>This page is under construction.</p>
			</main>
    </>
		)
}

export default CoffeeShop