import { Icon } from 'Icons'


import {useAudio} from 'react-use';
import { secondsToTime } from 'utils';
import CustomRange from 'components/CustomRange';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setControls, setPlaying, setSidebar } from 'stores/playerSlice';
const Player = () => {
  const {current,sidebar,playing} = useSelector(state => state.player)
  const dispatch =   useDispatch()
  const [audio, state, controls, ref] = useAudio({
      src: current?.src
    });
    console.log(state.playing)

    useEffect(() => {
    controls.play()
    }, [current])

    useEffect(() => {
      dispatch(setControls(controls))
      
    }, [])
    useEffect(()=>{
      dispatch(setPlaying(state.playing))
    },[state.playing])
    

  const volumeIcon = useMemo(()=>{
    if(state?.volume === 0 || state?.muted) return "volumeMuted"
    if(state?.volume > 0 && state?.volume<0.33) return "volumeLow"
    if(state?.volume >= 0.33 && state?.volume<0.66) return "volumeNormal"
     return "volumeFull"
    
  },[state.volume,state.muted]) 

  // console.log(state)
  return (
    <div className='flex px-4 justify-between items-center h-full'  >
        <div className='min-w-[11.25rem] w-[30%] '>
          {
            current && (
              <div className='flex items-center' >
              <div className='flex items-center mr-3' >

             {!sidebar && (
               <div className='w-14 h-14 mr-2 flex-shrink-0 relative group' >
                <img src={current.image} alt="" />
                <button onClick={() => dispatch(setSidebar(true))} className='w-6 h-6 bg-black absolute top-1 opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-105 right-1 rounded-full rotate-90 flex items-center justify-center' >
                  <Icon size={16} name = "arrowLeft"/>
                  </button>
              </div>
               ) }
                <div className='' >
                <h6 className='text-sm line-clamp-1' >{current.title}</h6>
                <p className='text-[0.688rem] text-white text-opacity-70' >{current.artist}</p>
                  </div>
                </div>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="heart"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="pictureInPicture"/>
                </button>
                </div>
            )
          }

          </div>
        <div className='flex flex-col items-center max-w-[45.125] w-[40%] px-4 '>
            <div className='flex items-center gap-x-2' >
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="shuffle"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="playerPrev"/>
                </button>
                <button onClick={controls[state?.playing ? "pause" : "play"]} className='w-8 h-8 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]' >
                    <Icon size={16} name={state?.playing ? "pause" : "play"} />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="playerNext"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="repeat"/>
                </button>
            </div>
            <div className='w-full flex items-center gap-x-2 ' >
              {audio}
              <div className='text-[0.688rem] text-white text-opacity-70'  >
              {secondsToTime(state?.time)}
              </div>
           <CustomRange
           step={0.1}
           min={0}
           max={state?.duration || 1}
           value = {state?.time}
           onChange = {value =>controls.seek(value)}

           />
        <div className='text-[0.688rem] text-white text-opacity-70'  >

              {secondsToTime(state?.duration)}
        </div>
            </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex justify-end items-center'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="lyrics"/>
                </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="queue"/>
                </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="device"/>
                </button>
        <button onClick={controls[state.muted ? "unmute" : "mute  "]}
         className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name={volumeIcon}/>
                </button>
              <div className='w-[5.813rem] max-w-full'>
                <CustomRange
                min={0}
                max={1}
                step={0.01}
                value={ state.muted ? 0 : state?.volume}
                onChange={value => {
                  controls.volume(value)
                controls.unmute()
                }}
                />
                </div>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' >
                    <Icon size={16} name="fullScreen"/>
                </button>
        </div>

    </div>
  )
}

export default Player