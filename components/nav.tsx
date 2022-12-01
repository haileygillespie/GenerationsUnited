import styles from '../styles/navbar.module.scss'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="https://chng.it/HKLfzFGCzJ" target="_blank" >Sign</a>
			<a href="/donate">Donate</a>
			<a href="/learn">Learn</a>
		</nav>
	)
}