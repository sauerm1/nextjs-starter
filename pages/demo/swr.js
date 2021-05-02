import useSWR, { SWRConfig } from "swr";
import swrFetcher from "../../utils/swrFetcher";
import useDateTimeStore from "../../store/dateTimeStore";
import Header from "../../components/Header";
import Page from "../../components/Page";
import PageDescription from "../../components/PageDescription";
import useFetch from "../../utils/useFetch";
import { useEffect } from "react";
import { syncWithStorage } from "swr-sync-storage";


const swr = () => {
	const [fetchData, fetchError, fetchloading, fetchRequest] = useFetch();

	const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/datetime`;

	useEffect(() => {
		const options = {
			url: url,
			method: "get",
		};
		fetchRequest(options);
	}, []);

	const data = useDateTimeStore((state) => state.data);
	const error = useDateTimeStore((state) => state.error);
	const isValidating = useDateTimeStore((state) => state.isValidating);
	const fetchDateTimeData = useDateTimeStore((state) => state.fetchDateTimeData);
	fetchDateTimeData(url);

	// const { data, error, isValidating } = useSWR(url, swrFetcher);

	const formatDateTime = (timestamp) => {
		let d = new Date(timestamp);
		return d.toLocaleString();
	};

	const Line = ({ field, value, loading }) => {
		const color = loading && "#0070f3";
		return (
			<div style={{ padding: "10px", fontSize: "20px", display: "flex" }}>
				<div>{field} : </div>
				<div style={{ fontWeight: "bold", color: color }}>{value}</div>
			</div>
		);
	};
	// if (typeof window !== "undefined") {
	// 	// to sync with localStorage
	// 	syncWithStorage("local");
	  
	// 	// to sync with sessionStorage
	// 	syncWithStorage("session");
	//   }

	return (
		<>
			<Header>SWR</Header>
			<Page>
				<PageDescription
					title="Get Time"
					description="SWR will cache your API response and revalidate at certain points throught using the application. You can
					validate that new data is fetched from the worldtimeapi API by clicking on a new tab, and then back to this
					one. You will see that a new network request is made to this API and the updated date/time is re-rendered on
					the page."
				></PageDescription>

				<Line field={"Is Loading"} value={String(isValidating)} loading={isValidating} />
				<Line field={"Current Time"} value={data?.dateTime ? formatDateTime(data?.dateTime) : "undefined"} />
				<h1>Normal Fetch</h1>
				<Line field={"Is Loading"} value={String(fetchloading)} loading={fetchloading} />

				<Line field={`Current Time`} value={fetchData?.dateTime ? formatDateTime(fetchData?.dateTime) : "undefined"} />
			</Page>
		</>
	);
};


export default swr;
