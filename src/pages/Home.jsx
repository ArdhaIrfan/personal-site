import { useState } from 'react'
import styles from '../style/Home.module.css';
import sporteevMockup from '../assets/sporteev-1000x1000.png'
import sarogaMockup from '../assets/saroga-1000x1000.png'
import todo from '../assets/todo.png'
import profilePhoto from '../assets/profile-photo.png'
import experience from '../assets/experience.jpg'
import awards from '../assets/awards.jpg'
import contactPhoto from '../assets/contact-photo.jpg'
import { HiOutlineMail } from "react-icons/hi"
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaBars } from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Home = () => {
	const [showProfile, setShowProfile] = useState(false)
	const [showNav, setShowNav] = useState(false)

	const items = document.getElementsByClassName(styles.detailedRole)
	const showAndHide = () => {
		const button = document.getElementById("showHide")
		showProfile ? Array.from(items).forEach(e => {
			e.style.display = "none"
			button.classList.remove(styles.btnTransparent1)
			button.classList.add(styles.btnSecondary)
		}) : Array.from(items).forEach(e => {
			e.style.display = "flex"
			button.classList.remove(styles.btnSecondary)
			button.classList.add(styles.btnTransparent1)
		})
		setShowProfile(!showProfile)
	}

	// const bar = document.getElementById("menu")
	// console.log(bar)
	const showHideNav = () => {
		const navbar = document.getElementById("navlist")
		showNav ? navbar.style.display = "none" : navbar.style.display = "flex"
		setShowNav(!showNav)
	}

	const body = document.getElementsByTagName("body");
	Array.from(body).forEach(e => {
		e.classList.add(styles.body)
	})

	return (
		<>
			<header className={styles.header}>
				<p id="menu" onClick={() => showHideNav()}><FaBars /></p>
				<nav className={styles.nav}>
					<ul id='navlist'>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#profile">About Me</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>
			<div className={styles.hero}>
				<div className={`${styles.wrapper} ${styles.flexColumn}`}>
					<div>
						<h1>Ardha Irfan</h1>
						<p>UI UX Designer | Frontend Web Developer</p>
					</div>
					<div className={`${styles.cta} ${styles.flexRow}`}>
						<a href="#portfolio" className={`${styles.btn} ${styles.btnPrimary}`}>My Portfolio</a>
						<a href="#profile" className={`${styles.btn} ${styles.btnTransparent1}`}>Profile</a>
					</div>
				</div>
			</div>
			<section id="portfolio" className={styles.myPortfolio}>
				<h2 className={styles.sectionTitle}>My Portfolio</h2>
				<div className={styles.content}>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={sporteevMockup} alt="Sporteev Mockup" />
						<div className={styles.flexColumn}>
							<h6>Sporteev Mobile App</h6>
							<Link to='/sporteev' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">See Details</Link>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={sarogaMockup} alt="Saroga Mockup" />
						<div className={styles.flexColumn}>
							<h6>Saroga Mobile App</h6>
							<Link to='/saroga' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">See Details</Link>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={todo} alt="Simple Todo App" />
						<div className={styles.flexColumn}>
							<h6>To-do App</h6>
							<Link to='/todo' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">See Details</Link>
						</div>
					</div>
				</div>
			</section>
			<section id="profile" className={styles.profile}>
				<h3>About Me</h3>
				<div className={styles.content}>
					<div className={`${styles.summary} ${styles.flexRow}`}>
						<img className={styles.profilePhoto} src={profilePhoto} alt="Profile Photo" />
						<div>
							<h2>Ardha Irfan</h2>
							<p className={styles.role}>UI/UX Designer | Frontend Web Developer</p>
							<p className={styles.sum}>I am a person known for my friendly and outgoing personality, fueled by a genuine love for sports. My insatiable curiosity and passion for the sports industry have led me to pursue a career path in front-end web development and UI/UX design. With a creative mindset and broad imagination, I am eager to collaborate with others in creating an interconnected ecosystem for sport enthusiasts.</p>
						</div>
					</div>
					<div className={styles.profileCta}><a id="showHide" className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => showAndHide()}>{showProfile ? "Hide Details" : "Show Details"}</a></div>
					<div className={`${styles.category} ${styles.experience} ${styles.flexColumn}`}>
						<h4>Experience</h4>
						<div className={`${styles.catDetail} ${styles.flexRow}`}>
							<img className={styles.catPhoto} src={experience} alt="Experience" />
							<div className={styles.catList}>
								<div>
									<div className={`${styles.item} ${styles.flexColumn}`}>
										<h6 className={styles.name}>
											Co-Founder & UI/UX Designer - Sporteev
										</h6>
										<p className={styles.period}>
											September 2021 - Present
										</p>
									</div>
									<ul className={styles.detailedRole}>
										<li>Manage 7 other team members to develop a digital product that serves as a platform for sport enthusiasts to find their sport buddies</li>
										<li>Conducted user research via surveys with 200+ respondents and FGDs as well as interviewed 10 people to continuously improve product development</li>
										<li>Design the Sporteev mobile app MVP using Figma based on market and user research</li>
									</ul>
								</div>
								<div>
									<div className={`${styles.item} ${styles.flexColumn}`}>
										<h6 className={styles.name}>
											Online Shop Founder - Rumarasa
										</h6>
										<p className={styles.period}>
											August 2020 - Present
										</p>
									</div>
									<ul className={styles.detailedRole}>
										<li>Rumarasa is an Indonesian small F&B business that sells various fruit seasoning products in online marketplaces</li>
										<li>Started Rumarasa shop in August 2020 as the single founder</li>
										<li>Currently managing all of the business aspects with the help of 2 other staffs</li>
										<li>Sold 9000+ products with more than 1,500 ratings of 4.9 out of 5.0 buyer satisfaction</li>
									</ul>
								</div>
								<div>
									<div className={`${styles.item} ${styles.flexColumn}`}>
										<h6 className={styles.name}>
											Indonesian International Student Mobility Awards (IISMA) 2022
										</h6>
										<p className={styles.period}>
											September 2022 - February 2023
										</p>
									</div>
									<ul className={styles.detailedRole}>
										<li>One semester study program at Faculty of Geo-information Science and Earth Observation, University of Twente, Netherlands</li>
										<li>Chosen as one out of 1550 awardees, competing with more than 7 thousand applicants</li>
										<li> Fully funded scholarship covering tuition fee, living allowance, and transportation cost during the program at UT</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.awardsEdu}>
						<div className={`${styles.category} ${styles.awards} ${styles.flexColumn}`}>
							<h4>Awards</h4>
							<div className={`${styles.catDetail} ${styles.flexRow}`}>
								<div className={styles.catList}>
									<div>
										<div className={`${styles.item} ${styles.flexColumn}`}>
											<h6 className={styles.name}>
												Sporteev as the Best Team - COMPFEST Startup Academy 2022
											</h6>
											<p className={styles.period}>
												September 2022
											</p>
										</div>
										<ul className={styles.detailedRole}>
											<li>Had a role as the Hipster of Sporteev at the competition.</li>
											<li>Designed Sporteev&apos;s product prototype.</li>
										</ul>
									</div>
									<div>
										<div className={`${styles.item} ${styles.flexColumn}`}>
											<h6 className={styles.name}>
												Sporteev as the 2nd Place Winner - National Competition of Sport Innovation and Digital Technology 2022
											</h6>
											<p className={styles.period}>
												November 2022
											</p>
										</div>
										<ul className={styles.detailedRole}>
											<li>Sporteev won the second place in the “community sports” category. The competition was held by The Ministry of Youth and Sports Affairs of Indonesia.</li>
										</ul>
									</div>
									<img className={styles.awardsPic} src={awards} alt="Award" />
								</div>
							</div>
						</div>
						<div className={`${styles.category} ${styles.education} ${styles.flexColumn}`}>
							<h4>Education</h4>
							<div className={`${styles.catDetail} ${styles.flexRow}`}>
								<div className={styles.catList}>
									<div>
										<div className={`${styles.item} ${styles.flexColumn}`}>
											<h6 className={styles.name}>
												Institut Teknologi Sepuluh Nopember
											</h6>
											<p className={styles.period}>
												August 2020 - July 2024
											</p>
										</div>
										<ul className={styles.detailedRole}>
											<li>Information Systems Expo (ISE) 2021 as a Staff in Event Division that worked with 4 other team members</li>
											<li>Web programming volunteer teacher at SIMETRI 2021 by HMSI with 20 high school students</li>
											<li>Society 5.0 International Online Short Program participant in partnership with Kumamoto University</li>
											<li>Vice Chairman of Human Resource Development at ITS Badminton Community</li>
											<li>Delegation of Istanbul Youth Summit 2021, Istanbul, Turkey</li>
										</ul>
									</div>
									<div>
										<div className={`${styles.item} ${styles.flexColumn}`}>
											<h6 className={styles.name}>
												SMA Negeri 78 Jakarta
											</h6>
											<p className={styles.period}>
												July 2016 - May 2019
											</p>
										</div>
										<ul className={styles.detailedRole}>
											<li>Runner-up Al-Azhar Cup Badminton Team Competition</li>
											<li>Participant of Film-making Workshop held by The Ministry of Education and Culture</li>
											<li>Active member of Bulutangkis 78 extracurricular group</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact" className={styles.contact}>
				<h2>Contact Me</h2>
				<div className={styles.content}>
					<img src={contactPhoto} alt="Contact Photo" />
					<div className={styles.contactDetail}>
						<div>
							<h6><span><HiOutlineMail /></span> Email</h6>
							<p>ardhairfan17@gmail.com</p>
						</div>
						<div className={styles.center}>
							<h6><span><FaLinkedin /></span> Linkedin</h6>
							<p>linkedin.com/in/ardhairfan</p>
						</div>
						<div>
							<h6><span><FaInstagram /></span> Instagram</h6>
							<p>@ardhairfn</p>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<a href="#">
							<img src={profilePhoto} alt="Profile Pic" />
							<div>
								<h5>Ardha Irfan</h5>
								<p>UI/UX Designer | Frontend Web Developer</p>
							</div>
						</a>
					</div>
					<div className={styles.right}>
						<div className={styles.group}>
							<p>My Portfolio</p>
							<div className={styles.porto}>
								<Link to='/sporteev' rel="noreferrer" target="_blank">Sporteev Mobile App</Link>
								<Link to='#'>Saroga Mobile App</Link>
							</div>
						</div>
						<div className={styles.group}>
							<p>Social Media</p>
							<div className={styles.social}>
								<a href="https://linkedin.com/in/ardhairfan" rel="noreferrer" target="_blank"><span><FaLinkedin /></span></a>
								<a href="https://instagram.com/ardhairfn" rel="noreferrer" target="_blank"><span><FaInstagram /></span></a>
								<a href="https://twitter.com/ArdhaIrfan" rel="noreferrer" target="_blank"><span><FaTwitter /></span></a>
								<a href="https://facebook.com/ardha.irfan" rel="noreferrer" target="_blank"><span><FaFacebook /></span></a>
							</div>
						</div>
					</div>
				</div>
				<p className={styles.copyright}>Website design and content © 2023 Ardha Irfan.</p>
			</footer>
		</>
	)
}

export default Home