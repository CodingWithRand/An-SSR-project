"use client"

import { useEffect , useState} from "react"
import getData from "./api/youtube";

export default function Home() {
  let data: any | undefined;
  const [videoPlayer, setVideoPlayer] = useState<JSX.Element>(<></>);
  useEffect(() => {
    (async () => {
      data = await getData();
      setVideoPlayer(data.items[0].player.embedHtml)
    })()
  }, [])

  return (
    <div dangerouslySetInnerHTML={{__html: videoPlayer}} />
  )
}
