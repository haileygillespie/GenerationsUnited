import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import GreyWavyTop from '../components/greywavytop'
import GreyWavyBottom from '../components/greywavybottom'
import Navbar from '../components/nav'

import styles from '../styles/Home.module.scss'
import sectionstyles from '../styles/sections.module.scss'

export default function Home() {
  	return (
    <div>
		<Head>
			<title>Generations United - Home</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Navbar />

		<main>
			<header className={styles.heading}>
				<div className={styles.heading_container}>
					<img
						className={styles.headlogo}
						src="logotransparent-whitebakingsoda.png"
						alt="generations united logo" 
					/>
					<div className={styles.blurb}>
						<p><span>Because crack has affected black people almost exclusively, and especially black youth, it has been put on a back burner...</span></p>
						<span className={[sectionstyles.white_btn, sectionstyles.get_bigger].join(" ")}><a href="https://chng.it/HKLfzFGCzJ" target="_blank" >Sign Now</a></span>
					</div>
				</div>
				<GreyWavyTop />
			</header>
			<section className={sectionstyles.grey_section}>
				<h3>OUR MISSION</h3>
				<p>The well-known epidemics of Crack and Fentanyl are rooted in Baking Soda. Placing restrictions on Baking Soda (sodium bicarbonate), which is essential to the production of both drugs, would alter them to a SIGNIFICANT degree to where it would curb the use and illegal manufacturing, saving countless lives.</p>
				<span className={sectionstyles.white_btn}><a href="/about">Read More</a></span>
			</section>
			<GreyWavyBottom />

			<section className={sectionstyles.white_section}>
				<h3>OUR GOAL</h3>
				<p>
					While other drug scourges have been addressed in some way, very little has been done to stem the 40-year-old crack epidemic. Placing restrictions on Baking Soda (sodium bicarbonate), which is the third ingredient in Fentanyl and an essential component of crack, would alter both drugs to a SIGNIFICANT degree to where it would curb the use and illegal manufacturing of the drug and save countless of lives.
					<br /><br />
					We are asking for legislation to require registration – ID, name, address -- of all persons who purchase Baking Soda, with the understanding that it is a valuable product for many purposes whose legitimate purpose should not be impeded.
					<br /><br />
					The methadone/meth epidemic had its own central material, Sudafed. An emergency special campaign to require registration for Sudafed helped reduce meth addiction dramatically.
				</p>
				<span className={sectionstyles.black_btn}><a href="/learn">Learn More</a></span>
			</section>
		</main>
		<GreyWavyTop />
    </div>
  	)
}