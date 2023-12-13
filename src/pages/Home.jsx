import { useState } from 'react'
import styles from '../style/Home.module.css';
import sporteevMockup from '../assets/sporteev-1000x1000.png'
import sarogaMockup from '../assets/saroga-1000x1000.png'
import todo from '../assets/todo.png'
import profilePhoto from '../assets/profile-photo.png'
import experience from '../assets/experience.jpg'
import awards from '../assets/awards.jpg'
import contactPhoto from '../assets/contact-photo.jpg'
import coffeeShop from '../assets/coffee-shop.png'
import recipeFinder from '../assets/recipe-finder.png'
import weatherForecast from '../assets/weather-forecast.png'
// import formValidation from '../assets/form-validation-mockup.png'
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
						<p>UI/UX Design and Frontend Web Enthusiast</p>
					</div>
					<div className={`${styles.cta} ${styles.flexRow}`}>
						<a href="https://drive.google.com/drive/folders/1hnrnPa_AnsFa5TLM1vdY4jcMHVjjve9N?usp=drive_link" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noreferrer">My PM Portfolio</a>
						{/* <a href="#profile" className={`${styles.btn} ${styles.btnTransparent1}`}>Profile</a> */}
					</div>
				</div>
			</div>
			<section id="portfolio" className={styles.myPortfolio}>
				<h2 className={styles.sectionTitle}>My Portfolio</h2>
				<div className={styles.content}>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={sporteevMockup} alt="Sporteev Mockup" />
						<div className={styles.flexColumn}>
							<h6>Sporteev Mobile App Case Study</h6>
							<Link to='/sporteev' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">See Details</Link>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={sarogaMockup} alt="Saroga Mockup" />
						<div className={styles.flexColumn}>
							<h6>Saroga Mobile App Case Study</h6>
							<a href='https://ardhairfan.github.io/ux-design/index.html' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">See Details</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={coffeeShop} alt="Coffee Shop Website" />
						<div className={styles.flexColumn}>
							<h6>Coffee Shop Website</h6>
							<a href='https://ardhairfan.github.io/progate/coffee-shop' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">Visit</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={todo} alt="Simple Todo App" />
						<div className={styles.flexColumn}>
							<h6>To-do App</h6>
							<Link to='/todo' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">Visit</Link>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={weatherForecast} alt="Weather Focecast App" />
						<div className={styles.flexColumn}>
							<h6>Weather Forecast Web App</h6>
							<a href='https://ardhairfan.github.io/progate/weather-forecast' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">Visit</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={recipeFinder} alt="Recipe Finder Web App" />
						<div className={styles.flexColumn}>
							<h6>Recipe Finder Web App</h6>
							<a href='https://ardhairfan.github.io/progate/find-recipes' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">Visit</a>
						</div>
					</div>
					{/* <div className={`${styles.card} ${styles.flexColumn}`}>
						<img src={formValidation} alt="Form Validation Registration Page" />
						<div className={styles.flexColumn}>
							<h6>Form Validation Page</h6>
							<Link to='/form-validation' className={`${styles.btn} ${styles.btnSecondary}`} rel="noreferrer" target="_blank">Visit</Link>
						</div>
					</div> */}
				</div>
			</section>
			<section id="profile" className={styles.profile}>
				<h3>About Me</h3>
				<div className={styles.content}>
					<div className={`${styles.summary} ${styles.flexRow}`}>
						<img className={styles.profilePhoto} src={profilePhoto} alt="Profile Photo" />
						<div>
							<h2>Ardha Irfan</h2>
							<p className={styles.role}>UI/UX Design and Frontend Web Enthusiast</p>
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
											UI/UX Design Mentee - Digistar Class 2023 by Telkom Indonesia
										</h6>
										<p className={styles.period}>
											July 2023 - Present
										</p>
									</div>
									<ul className={styles.detailedRole}>
										<li>Participate in a 2-month intensive mentoring program in UI/UX design conducted by Telkom Indonesia</li>
										<li>Successfully selected as one of the 500 mentees from a highly competitive pool of more than 15,000 applicants</li>
										<li>Collaborate with a group of 10 individuals to brainstorm and develop a social project idea aimed at reducing the percentage of poverty in Indonesia</li>
									</ul>
								</div>
								<div>
									<div className={`${styles.item} ${styles.flexColumn}`}>
										<h6 className={styles.name}>
										Frontend Web Development Bootcamp Student - Progate
										</h6>
										<p className={styles.period}>
											February 2023 - June 2023
										</p>
									</div>
									<ul className={styles.detailedRole}>
										<li>Successfully completed a four and a half month intensive frontend web development bootcamp program</li>
										<li>Acquired end-to-end skills in frontend web development using ReactJS framework and local development server Vite</li>
										<li>Gained practical knowledge in essential technologies, including HTML, CSS, Javascript, Typescript, Git version control, responsive web development, AJAX, and API</li>
										<li>Demonstrated proficiency by completing challenges and enriching my portfolio. Check out my work at https://ardhairfan.vercel.app</li>
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
										<li>Acquired knowledge in Geographic Information Systems (GIS) and Earth Observations</li>
										<li>Successfully completed 2 final projects: Geo-tracker web app and machine learning classification for 3D earth surface area</li>
									</ul>
								</div>
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
											Vice Chairman of Human Resource Development Division - ITS Badminton Community
										</h6>
										<p className={styles.period}>
											January 2022 - December 2022
										</p>
									</div>
									<ul className={styles.detailedRole}>
										<li>Formulated strategies to develop badminton practical skills and knowledge for over 200 members</li>
										<li>Coached the members using badminton training programs that were created beforehand</li>
										<li>Educated the society about badminton through Instagram account with more than 2000 followers</li>
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
												Sporteev: 1st Runner-up - National Competition of Sport Innovation and Digital Technology 2022
											</h6>
											<p className={styles.period}>
												November 2022
											</p>
										</div>
										<ul className={styles.detailedRole}>
											<li>Sporteev won the second place in the “community sports” category. The competition was held by The Ministry of Youth and Sports Affairs of Indonesia.</li>
										</ul>
									</div>
									<div>
										<div className={`${styles.item} ${styles.flexColumn}`}>
											<h6 className={styles.name}>
												Sporteev: The Best Team - COMPFEST Startup Academy 2022
											</h6>
											<p className={styles.period}>
												September 2022
											</p>
										</div>
										<ul className={styles.detailedRole}>
											<li>Had a role as the product designer of Sporteev at the competition.</li>
											<li>Designed end-to-end Sporteev&apos;s product prototype.</li>
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
								<p>UI/UX Design and Frontend Web Enthusiast</p>
							</div>
						</a>
					</div>
					<div className={styles.right}>
						<div className={styles.group}>
							<p>My Portfolio</p>
							<div className={styles.porto}>
								<Link to='/sporteev'>Sporteev Mobile App</Link>
								<a href='https://ardhairfan.github.io/ux-design/index.html'>Saroga Mobile App</a>
								<a href='https://ardhairfan.github.io/progate/coffee-shop'>Coffee Shop Website</a>
								<Link to='/todo'>To-do App</Link>
								<a href='https://ardhairfan.github.io/progate/weather-forecast'>Weather Forecast Web App</a>
								<a href='https://ardhairfan.github.io/progate/find-recipes'>Recipe Finder Web App</a>
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