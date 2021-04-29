const delaySeconds = (sec) => {
	let i = 0;
	const seconds = sec;
	let currentDate = new Date();
	const futureDate = new Date();
	futureDate.setSeconds(futureDate.getSeconds() + seconds);
	do {
		currentDate = new Date();
		i++;
	} while (currentDate < futureDate);
	console.log(`ops performed in ${seconds} seconds : ${i}`);
};
export default delaySeconds;
