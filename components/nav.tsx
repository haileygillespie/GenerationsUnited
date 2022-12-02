import styles from '../styles/navbar.module.scss'
import Script from 'next/script'

export default function Navbar() {
	return (
		<div>
			<nav className={styles.navbar}>
				<span id="menuButton"><img src="menuicon.svg" className={styles.menu_icon} /></span>
				<div id="menuOptions" className={styles.nav_buttons}>
					<a href="/">Home</a>
					<a href="/about">Mission</a>
					<a href="https://chng.it/HKLfzFGCzJ" target="_blank" >Sign</a>
					<a href="/donate">Donate</a>
					<a href="/learn">Learn</a>
				</div>
			</nav>

			<Script src="/scripts/nav.js" />
		</div>
	)
}