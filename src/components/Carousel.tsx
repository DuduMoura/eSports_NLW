import React, { useEffect, useRef, useState } from "react";
import useDraggableScroll from "use-draggable-scroll";
import { Twitch } from "../services/Twitch";
export default function Carousel() {
  const [games, setGames] = useState<any>([]);
  const api = new Twitch;

  useEffect( () => {
    getGames()
  }, [])

  async function getGames() {
    let result = await api.getTopGames()
    setGames(result)
  }
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  function replaceImage(image: string) {
    return image.replace('{width}', '256').replace('{height}', '320')
  }

  function random() {
    return Math.floor(Math.random() * 20)
  }
  return (
    <>
      <div
        className="flex overflow-x-auto scroll-style overflow-hidden scroll-style"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {games ? (
          games.map((item: any) => {
            let url = replaceImage(item.box_art_url)
            return (
              <div key={item.id} className="flex justify-center px-2 pb-2 w-full">
                <div
                  onClick={() => false}
                  style={{ 
                    backgroundImage: `url(${url})` 
                  }}
                  className={`cursor-pointer relative block w-64 h-80 rounded-xl shadow-md`}
                >
                  <div className="w-full bg-gradient-to-t from-black via-black align-bottom absolute bottom-0 px-4 py-6">
                    <p className="text-white text-xl font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm ">{random()} anúncios</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div> Not </div>
        )}
      </div>
    </>
  );
}
