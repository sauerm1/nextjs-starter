import create from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import useSWR from "swr";
import swrFetcher from "../utils/swrFetcher";

let dateTimeStore = persist(
	(set) => ({
		/**
		 * Below is an example of data fetching within a store
		 * utlizing SWR. It is importnat that the below pattern
		 * be followed in order to gain all the benefits of SWR
		 * combined with the flexibility afforded with the
		 * singleton nature of Zustand stores.
		 *
		 * Use of the below can be viewed in:
		 * `pages/demo/swr.js`
		 */
		data: null,
		error: null,
		isValidating: false,
		fetchDateTimeData: async (url) => {
			const { data, error, isValidating } = useSWR(url, swrFetcher);

			set((state) => ({
				data: data,
				error: error,
				isValidating: isValidating
			}));
		},
	}),
	{
		name: "dateTimeData", // unique name
		// getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
	}
);

dateTimeStore = devtools(dateTimeStore);

const useDateTimeStore = create(dateTimeStore);

export default useDateTimeStore;
