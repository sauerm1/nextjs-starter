const swrFetcher = (...args) => fetch(...args).then((res) => res.json());
export default swrFetcher;
