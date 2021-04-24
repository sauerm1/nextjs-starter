import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (options) => {
    setData(null)
    setError(null)
    setLoading(true)
    try {
      const res = await axios(options);
      setData(res.data);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return [ data, error, loading, request ];
};

export default useFetch;