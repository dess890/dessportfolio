import emoji from "react-easy-emoji";

export const greetings = {
	name: "Desirree Adegunle",
	title: "Hey , I'm Dess!",
	description:
		"An inventive Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Express / PostGreSQL and some other cool web development focused frameworks and libraries.",
	resumeLink: "https://docs.google.com/document/d/1cWdJMcPZnpVynnGS6uw7Wm74kYjp5XzRLsghKKter1k/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "dess890",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/dess890",
	linkedin: "https://www.linkedin.com/in/desirree-adegunle/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Azure / AWS "
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "azure",
			fontAwesomeClassname: "logos:azure",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "DigitalCrafts",
		subHeader: "Certificate in Web Development",
		duration: "November 2021 - March 2022",
		desc: "Built a multitude of Frontend, Backend, and Fullstack projects.",
		descBullets: [
			"Learned Frontend Development fundamentals such as HTML, CSS, JavaScript, Responsive Design, React, Command Line and Frameworks.",
			"Studied Backend Development such as JS, Python, Databases, Node.js, Express, Terminal, Npm Modules, Get & Post, HTTP, and Hosting.",
		],
	},
	{
		schoolName: "The George Washington University",
		subHeader: "Bachleors of Arts in English Literature",
		duration: "August 2016 - May 2020",
		descBullets: [
			"Minored in Linguistics",
		],
	},

];

export const experience = [
	{
		role: "Copy Editor",
		company: "Poet Lore",
		companylogo: "/img/icons/common/poetlore.png",
		date: "September 2018 – May 2019",
		desc: "Performed administrative & clerical tasks in support of the managing editor of Poet Lore-- America's oldest poetry journal.",
		descBullets: [
			"Assisted in building a magazine catalogue by creating databases to log factual and statistical information.",
			"Visited the Library of Congress to locate and research issues missing from the office archives.",
		],
	},
	{
		role: "Researcher",
		company: "CIEE Global Institute",
		companylogo: "/img/icons/common/github.svg",
		date: "September 2019 – December 2019",
		desc: "Participated in extensive research regarding language and its relationship with marginalized communities",
		descBullets: [
			"Interviewed several famous local hip-hop artists based in London.",
			"Produced and presented a final paper among CIEE and University of London faculty members.",
		],
	},
	{
		role: "Corps Member",
		company: "AmeriCorps",
		companylogo: "/img/icons/common/americorps.png",
		date: "October 2016 – May 2017",
		desc: "Provided individualized attention and positive adult-child relationships to prepare children attending preschool in low-income neighborhoods.",
		descBullets: [
			"Implemented early childhood curriculum and promoted children’s language and literacy skills.",
			"Collaborated with a team of ten Corps members to plan twice weekly in classroom activities for a class of sixteen preschool children.",
		],
	},
];

export const projects = [
	{
		name: "Kackle",
		companylogo: "/img/icons/common/kackle.png",
		desc: "Kackle is a social media site made that combines your favorite parts of other social media sites such as Twitter and Facebook and puts it all in one place.",
		github: "https://github.com/dess890/kackle",
		link: "https://kackleapp.herokuapp.com/",
	},
	{
		name: "Scene-it",
		desc: "A Fullstack movie search application created with React and Redux",
		github: "https://github.com/dess890/scene-it-react",
		link: "https://sceneitreact.netlify.app/",
	},
];

export const feedbacks = [
	// {
	// 	name: "lorem ipsum",
	// 	feedback:
	// 		"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	// },
	// {
	// 	name: "lorem ipsum",
	// 	feedback:
	// 		"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	// },
];
