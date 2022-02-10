import React from 'react'
import './PlayingScene.css'
import scissor from '../Image/scissors.jpg'
import rock from '../Image/rock.jpg'
import paper from '../Image/paper.png'
function PlayingScene() {
  return (
    <div className='playingScene'>
        <div className='playBox'>
            <div className='itemContainer'>
                <div className='card scissors'>
                    <img src={scissor}/>
                </div>
            </div>
            <div className='itemContainer'>
                <div className='card rock'>
                    <img src={rock}/>
                </div>
            </div>
            <div className='itemContainer'>
                <div className='card paper'>
                    <img src={paper}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayingScene