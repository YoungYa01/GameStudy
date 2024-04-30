import Player, {IPlayerOptions} from "xgplayer/es/player";
import {useEffect} from "react";
import play from 'xgplayer/es/plugins/play';
import progress from 'xgplayer/es/plugins/progress';
import volume from 'xgplayer/es/plugins/volume'
import pip from 'xgplayer/es/plugins/pip'

export default (props: IPlayerOptions) => {

  useEffect(() => {
    new Player({
      controlPlugins: [
        play,
        progress,
        volume,
        pip,
      ],
      ...props
    })
  }, [])

  return (
    <div id={props.id}></div>
  )
}
