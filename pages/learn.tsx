import Head from 'next/head'
import Navbar from '../components/nav'

import GreyWavyBottom from '../components/greywavybottom'
import GreyWavyTop from '../components/greywavytop'

import sectionstyles from '../styles/sections.module.scss'
import styles from '../styles/learn.module.scss'

export default function Learn() {
  	return (
    <div>
		<Head>
			<title>Generations United - Learn</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Navbar />

		<main>
			<GreyWavyBottom />
			<section className={sectionstyles.white_section}>
				<h2>LEARN MORE..</h2>
				<section className={styles.info_section}>
					<h3>[ THE FACTS ]</h3>
					<ul>
						<li>Crack cocaine is a very dangerous and harmful drug.  It is highly addictive and is associated with permanent brain damage in long-term users.</li>
						<li>The abuse of crack cocaine has led to devastating effects on individuals and the community, including:
							<ul>
								<li>dramatic deaths associated with crack ingestion</li>
								<li>violent crimes associated with crack ingestion</li>
								<li>criminal activity associated with the illegal importation of cocaine to mix with baking soda and precursor compounds to support the growing appetite for this drug in the United States</li>
							</ul>
						</li>
						<li>Crack endures because it initially gives what some call the most intense “high” possible, but one which is then not able to be reproduced.</li>
						<li>It also endures because crack-making materials are simple and easy to buy:  1. Cocaine; 2. Crack pipes, often called Love Roses; 3. Small pieces of brillo (steel wool); and 4, the killer: <em>Baking Soda</em>.</li>
					</ul>

					<h3>[ WHY REGULATE BAKING SODA ]</h3>
					<p>
						While other drug scourges have been addressed in some way, very little has been done to stem the 40-year-old crack epidemic. Placing restrictions on Baking Soda (sodium bicarbonate), which is the third ingredient in Fentanyl and an essential component of crack, would alter both drugs to a SIGNIFICANT degree to where it would curb the use and illegal manufacturing of the drug and save countless of lives.
						<br /><br />
						<em>Because crack has affected black people almost exclusively, and especially black youth, the scourge of crack has been put on a back burner.</em>
						<br /><br />
						We are asking for legislation to require registration – ID, name, address -- of all persons who purchase Baking Soda, with the understanding that it is a valuable product for many purposes whose legitimate purpose should not be impeded.
						<br /><br />
						The methadone/meth epidemic had its own central material, Sudafed.  An emergency special campaign to require registration for Sudafed helped reduce meth addiction dramatically.
						<br /><br />
						In fact, the dangers caused by crack ARE similar to some of the same exact findings Congress used to issue the Act to combat and control Methamphetamine, which can be used to issue an Act to help protect today’s generations of kids from smoking crack and the use of  fentanyl. 
					</p>
					<p><em><strong>Simply stated:  Crack use and addiction ARE IMPOSSIBLE without Baking Soda.  And Baking Soda, like pipes and steel wool, is available in virtually every supermarket in the United States.</strong></em></p>
					<p>We are also advocating for a national education campaign to inform the US population that this well-known epidemic is rooted in Baking Soda and can be defeated with the actions called for here.</p>
				</section>
				<span className={sectionstyles.black_btn}><a href="https://chng.it/HKLfzFGCzJ" target="_blank" >Sign Now</a></span>
			</section>
		</main>
		<GreyWavyTop />
    </div>
  	)
}