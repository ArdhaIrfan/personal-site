import styles from '../style/Sporteev.module.css'
import sporteevMockup from '../assets/sporteev-1000x1000.png'
import sporteevLogo from '../assets/sporteev-logo-white.png'
import overviewSvg from '../assets/overview.svg'
import footballSvg from '../assets/playing-football.svg'
import miniso from '../assets/miniso.jpg'
import survey1 from '../assets/survey1.png'
import survey2 from '../assets/survey2.png'
import survey3 from '../assets/survey3.png'
import survey4 from '../assets/survey4.png'
import core from '../assets/core.svg'
import mobilePhone from '../assets/mobile-phone.svg'
import basketballGame from '../assets/basketball-game.svg'
import moneyTransfer from '../assets/money-transfer.svg'
import userInterface from '../assets/user-interface.svg'
import wireframe from '../assets/wireframe.svg'
import paymentFlow from '../assets/payment-flow.png'
import openPlayFlow from '../assets/open-play-flow.png'
import appInterface1 from '../assets/app-interface1.png'
import appInterface2 from '../assets/app-interface2.png'
import designSystem1 from '../assets/design-system1.png'
import designSystem2 from '../assets/design-system2.png'
import teamWork from '../assets/team-work.svg'
import challenge from '../assets/challenge.jpg'
import profilePhoto from '../assets/profile-photo.png'
import { FaCheck, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Sporteev = () => {
	const body = document.getElementsByTagName("body");
	Array.from(body).forEach(e => {
		e.classList.add(styles.body)
	})

	return (
		<>
			<Helmet>
				<title>{"Sporteev Case Study"}</title>
			</Helmet>
			<section className={`${styles.section} ${styles.hero}`}>
				<img className={styles.mockup} src={sporteevMockup} alt="Sporteev Mockup" />
				<div>
					<img className={styles.logo} src={sporteevLogo} alt="Sporteev Logo" />
					<h1>Sport activity management app.</h1>
				</div>
			</section>
			<section className={`${styles.section} ${styles.quotes}`}>
				<p>Sporteev is a digital ecosystem where sport enthusiasts meet and play together. Its goal is to unleash the power of sports in everyone’s life.</p>
			</section>
			<section className={`${styles.section} ${styles.overview}`}>
				<div>
					<img src={overviewSvg} alt="Project Overview" />
					<div className={styles.upper}>
						<h2>Project Overview</h2>
						<div className={styles.border}></div>
						<p>Sporteev app is an ongoing mobile app development project led by the startup Sporteev, aimed at providing a platform for sports enthusiasts to connect with one another. Within the Sporteev app, users have the ability to share their own sports activities or join others in playing together. The app encompasses several key functionalities, including user accounts, a feature called Open Play for sharing activities, and a payment system.</p>
					</div>
				</div>
				<p className={styles.lower}>The initial scope of the project includes user authentication, profile management, the Open Play feature, and the payment system which operates in a semi-automatic manner. Following the initial release, the Sporteev mobile app will undergo continuous development and improvement, incorporating additional features and addressing any issues that arise.</p>
			</section>
			<img className={styles.footballSvg} src={footballSvg} alt="Playing Football Illustration" />
			<section className={`${styles.section} ${styles.problems}`}>
				<h3 className={styles.title}>1. The Problem</h3>
				<div className={styles.content}>
					<p>Team sports like football, basketball, volleyball, and badminton require a significant number of participants to ensure a proper game. Unfortunately, many individuals who wish to engage in sports face the challenge of finding like-minded companions to play with. This struggle often leads to the abandonment of their intention to participate in sports activities. Consequently, the lack of motivation contributes to the low engagement of only approximately 30% of the Indonesian population in regular sporting activities (the number is based on a statistics in 2018).</p>
					<img src={miniso} alt="Playing Football" />
				</div>
			</section>
			<section className={`${styles.section} ${styles.research}`}>
				<h3 className={styles.title}>2. Research</h3>
				<div className={styles.content}>
					<p>I conducted a simple research using Google Forms and shared it with my friends through various communication channels. The survey findings revealed that 3 out of 4 of respondents expressed a love for sports. Surprisingly, a significant number of them did not actively engage in physical activities, with half of the participants reporting that they often do sports alone, without any companions.</p>
					<div className={styles.questions}>
						<p>Some emerging questions...</p>
						<ul>
							<li>1. Do people actually love sports?</li>
							<li>2. How often people do sports in general?</li>
							<li>3. Do they involve other people or prefer to exercise alone?</li>
						</ul>
					</div>
					<div className={styles.statistics}>
						<div>
							<img src={survey1} alt="Statistics 1" />
							<img src={survey2} alt="Statistics 2" />
						</div>
						<img src={survey3} alt="Statistics 3" />
					</div>
					<p>To gather more comprehensive insights, I conducted further research to delve into the underlying reasons behind people&apos;s irregular participation in sports. A survey was administered to over 190 respondents, revealing three primary factors contributing to this phenomenon.</p>
					<div className={styles.reasons}>
						<p>Too busy</p>
						<p>Too lazy</p>
						<p>Too few to play with</p>
					</div>
					<img src={survey4} alt="Bar Chart" />
				</div>
			</section>
			<section className={`${styles.section} ${styles.solution}`}>
				<h3 className={styles.title}>3. The Solution</h3>
				<div className={styles.content}>
					<div>
						<p>
							After conducting brainstorming sessions, I developed an innovative solution to address these challenges. I conceptualized a digital platform that acts as a bridge, connecting individuals who share a desire to engage in sports activities. Recognizing that lack of motivation can hinder exercise routines, I hypothesized that having friends to participate alongside can significantly boost motivation levels.
						</p>
						<br />
						<p>
							Through this digital platform, users can explore and join a wide range of sport activities that align with their preferences. They have the flexibility to select activities based on their specific sport interests, preferred location, and available schedule. Consequently, this app serves as an effective remedy for those who struggle to find time for sports due to their busy lifestyles.
						</p>
					</div>
				</div>
			</section>
			<div className={styles.core}>
				<img src={core} alt="Mobile App Illustration" />
				<p>A mobile app that manages sports activities.</p>
			</div>
			<section className={`${styles.section} ${styles.solutions}`}>
				<div>
					<img src={mobilePhone} alt="Feature 1" />
					<p>Mobile app platform for connecting sport enthusiasts</p>
				</div>
				<div>
					<img src={basketballGame} alt="Feature 2" />
					<p>Join activities based on user’s preferred sport, location, and time</p>
				</div>
				<div>
					<img src={moneyTransfer} alt="Feature 3" />
					<p>Semi-auto payment system to make transaction between users easier</p>
				</div>
				<div>
					<img src={userInterface} alt="Feature 4" />
					<p>Simple UI design which increases focus on the main feature</p>
				</div>
			</section >
			<section className={`${styles.section} ${styles.myrole}`}>
				<h3 className={styles.title}>4. My Role</h3>
				<div className={styles.content}>
					<p>In this project, my role is to design the prototype for the Sporteev mobile app. I collaborate closely with a team of one UI designer and three programmers. My responsibilities encompass various aspects, such as conducting user research through surveys and interviews, designing the app flow, determining app features and functionality, creating UI designs, and establishing design systems.</p>
					<div>
						<img src={wireframe} alt="UI Sketch Illustration" />
						<div className={styles.roles}>
							<p>Worked in a team of 2</p>
							<ul>
								<li><span><FaCheck /></span> Conducted user research</li>
								<li><span><FaCheck /></span> Generated ideas</li>
								<li><span><FaCheck /></span> Designed the user flow</li>
								<li><span><FaCheck /></span> Created app prototype in Figma</li>
								<li><span><FaCheck /></span> Designed the user interface</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.execution}`}>
				<h3 className={styles.title}>5. Execution: Designing the Product</h3>
				<div className={styles.content}>
					<p>Throughout the process, I embraced the design thinking approach, encompassing five key aspects: empathize, define, ideate, prototype, and test. While the implementation may not have been flawless, the design thinking process provided valuable guidance in cultivating a designer mindset and delivering a high-quality product.</p>
					<div className={styles.flow}>
						<h4>User Flow</h4>
						<div className={styles.flowchart}>
							<div className={styles.chart}>
								<img src={openPlayFlow} alt="Flow Chart 1" />
								<p>Open Play Flow</p>
							</div>
							<div className={styles.chart}>
								<img src={paymentFlow} alt="Flow Chart 2" />
								<p>Payment System Flow</p>
							</div>
						</div>
						<div>
							<p>
								The main feature of the Sporteev mobile app is Open Play, which allows users to create and join sport activities. The concept is straightforward: a user (Host) creates an event and shares it on Sporteev, while another user (Participant) can view the event details and choose to join.
							</p>
							<br />
							<p>
								To secure participation, Participants are required to pay a fee, which is facilitated by the semi-automatic payment system I developed. This system simplifies transactions between users and minimizes costs, as external payment gateways can be expensive. Participants can pay the Open Play fee outside the app using bank transfer or a digital wallet. Once the payment is made, Sporteev verifies its validity and confirms the user&apos;s eligibility to join the activity.
							</p>
						</div>
					</div>
					<div className={styles.interface}>
						<h4>Interface Design</h4>
						<div>
							<img src={appInterface1} alt="App Interface 1" />
							<img src={appInterface2} alt="App Interface 2" />
							<p>Sporteev&apos;s UI Design</p>
						</div>
						<p>The app&apos;s interface was created using Figma. Initially, I aimed to design the interface from scratch, striving for originality in every component. However, in order to achieve faster and more consistent design outcomes, I decided to leverage the Material Design Kit 3, a design system developed by Google. This change in approach is evident when comparing the authentication page, which has a significant different design style compared to the rest of the app.</p>
					</div>
					<div className={styles.designSystem}>
						<h4>Design System</h4>
						<div>
							<img src={designSystem1} alt="Design System 1" />
							<img src={designSystem2} alt="Design System 2" />
							<p>Sporteev&apos;s Design System</p>
						</div>
						<p>After careful consideration, Sporteev made the decision to develop its own design system, taking inspiration from the existing interface design. This involved ensuring consistency in color choices, typography, components, and icons. The outcome of this effort will serve as a foundation for future interface design iterations, promoting a cohesive and unified visual identity across the app.</p>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.challenge}`}>
				<h3 className={styles.title}>6. The Challenge</h3>
				<div className={styles.content}>
					<p>The work process presented several challenges due to various limitations. The budget and availability of human resources for the development phase were key considerations. It was necessary to ensure that the design could be effectively implemented by the development team without significant hurdles. As a result, the design had to be adjusted to streamline the development of app components.</p>
					<img src={teamWork} alt="The Challenge" />
				</div>
			</section>
			<section className={styles.section}>
				<img className={styles.teamwork} src={challenge} alt="Teamwork" />
			</section>
			<section className={`${styles.section} ${styles.results}`}>
				<div>
					<h3 className={styles.title}>7. The Result and Reflection</h3>
					<div className={styles.content}>
						<p>
							The Sporteev mobile app prototype is the primary outcome of the entire development process. We utilized the Figma tool, leveraging several plugins to streamline our work and enhance productivity. In addition to the prototype, my colleague and I developed a comprehensive design system, facilitating seamless future enhancements and iterations.
						</p>
						<br />
						<p>
							Throughout the journey, I gained valuable insights and lessons. Designing a digital platform is an exhilarating yet demanding process, as it involves various considerations. As a UI/UX designer, my main objective is to develop innovative and effective solutions to address user pain points. However, it is crucial to also consider the limitations and constraints faced by the team. While creating an aesthetically pleasing app may be tempting, its feasibility relies on the team&apos;s development capabilities. Thus, maintaining a balance between design aspirations and the team&apos;s capacity is paramount.
						</p>
					</div>
					<img className={styles.mockup} src={sporteevMockup} alt="Sporteev Mockup" />
				</div>
			</section>
			{/* <Link to='/' className={`${styles.btn} ${styles.btnSecondary} ${styles.btnBack}`}>Back to Home Page</Link> */}
			<footer>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<Link to="/">
							<img src={profilePhoto} alt="Profile Pic" />
							<div>
								<h5>Ardha Irfan</h5>
								<p>UI/UX Designer | Frontend Web Developer</p>
							</div>
						</Link>
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

export default Sporteev