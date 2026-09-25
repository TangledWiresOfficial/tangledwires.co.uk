import {useEffect, useState} from "react";
import axios from "axios";

export function useLastUpdated(file: string) {
  const [lastUpdated, setLastUpdated] = useState<Date | undefined>();

  useEffect(() => {
    axios.get(`https://api.github.com/repos/TangledWiresOfficial/tangledwires.co.uk/commits?path=${encodeURIComponent(file)}&sha=main&per_page=1`, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    }).then((response) => {
      const commit = response.data[0];
      const lastUpdatedDate = new Date(commit.commit.committer.date);
      setLastUpdated(lastUpdatedDate);
    }).catch((error) => {
      console.error("Error fetching last updated date:", error);
    });
  }, [file]);

  return lastUpdated;
}