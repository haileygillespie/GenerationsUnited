import styles from '../styles/navbar.module.scss'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="/">Home</a>
			<a href="/">About</a>
			<a href="/">Sign</a>
			<a href="/">Donate</a>
			<a href="/">Learn</a>
		</nav>
	)
}