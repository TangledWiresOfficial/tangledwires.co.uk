import axios from "axios";
import {useEffect, useState} from "react";

export function useRemoteData<T>(url: string) {
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    axios.get(url).then((r) => setData(r.data));
  }, [url]);

  return data;
}
