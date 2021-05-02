import create from "zustand";
import { devtools } from "zustand/middleware";
import useSWR from "swr";
import swrFetcher from "../utils/swrFetcher";
import { syncWithStorage } from "swr-sync-storage";
let dateTimeStore = (set) => ({
	data: null,
	error: null,
	isValidating: false,
	fetchDateTimeData: async (url) => {
		const { data, error, isValidating } = useSWR(url, swrFetcher);
		if (typeof window !== "undefined") {
			syncWithStorage("local");
			syncWithStorage("session");
		}
		set((state) => ({
			data: data,
			error: error,
			isValidating: isValidating,
		}));
	},
});

dateTimeStore = devtools(dateTimeStore);

const useDateTimeStore = create(dateTimeStore);

export default useDateTimeStore;
