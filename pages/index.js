import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Header from "../components/Header";
import HR from "../components/HR";
import React from "react";
import Page from "../components/Page";

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js Starter App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<Page>
				<main className={styles.main}>
					<h1 className={styles.title}>
						Welcome to <a href="https://github.com/sauerm1/nextjs-starter">Next.js</a> Starter App
					</h1>

					<div className={styles.grid}>
						<Card link="demo/axios" title="Axios - Fetching Data" description="Fetching data with Axios"></Card>
						<Card
							link="demo/zustand"
							title="Zustand - State Management "
							description="Buying groceries with Zustand"
						></Card>
						<Card
							link="demo/login"
							title="Zustand - Persistent State"
							description="Managing persistent state with Zustand"
						></Card>
						<Card
							link="demo/swr"
							title="SWR - Fetching Data"
							description="SWR helps with data fetching and caching"
						></Card>
					</div>

					<HR width={100} margin="20px 0px" />
					<div className={styles.grid}>
						<Card link="markdownEditor" title="md edit" description="Editing markdown pages"></Card>
					</div>

					<HR width={100} margin="20px 0px" />

					<div className={styles.grid}>
						<Card
							link="https://nextjs.org/docs"
							title="Documentation"
							description="Find in-depth information about Next.js features and API."
						></Card>

						<Card
							link="https://nextjs.org/learn"
							title="Learn"
							description="Learn about Next.js in an interactive course with quizzes!"
						></Card>

						<Card
							link="https://github.com/vercel/next.js/tree/master/examples"
							title="Examples"
							description="Discover and deploy boilerplate example Next.js projects."
						></Card>

						<Card
							link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							title="Deploy"
							description="Instantly deploy your Next.js site to a public URL with Vercel."
						></Card>
					</div>
				</main>

				<footer className={styles.footer}>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
					</a>
				</footer>
			</Page>
		</>
	);
}
