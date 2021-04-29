import delaySeconds from "../../utils/delaySeconds";

export default function handler(req, res) {
	const newDateTime = new Date();
	delaySeconds(3);
	res.status(200).json({ dateTime: newDateTime });
}
