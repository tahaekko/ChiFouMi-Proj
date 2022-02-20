import React from 'react'
import './PlayingScene.css'
import scissor from '../Image/scissors.png'
import rock from '../Image/rock.png'
import paper from '../Image/paper.png'
function PlayingScene() {
  return (
    <div className='playingScene'>
        <div className='scoreBoard'>
            <div className='title'>
                Chi
            </div>
            <div className='score'>
                <p>score</p>
                <h1>0</h1>
            </div>
        </div>

        <div className='PickCont'>
            <div className='pickedCard player'>
                <div className='upick'>You picked</div>
            </div>
            <div className='resultBox'>
                <h1>Time: 5s</h1>
                <p>Result</p>
                <div>You Won</div>
            </div>
            <div className='pickedCard enemy'>
                <div className='upick'>He picked</div>
            </div>
        </div>
        

        <div className='cards'>
            <div className='card scissors'>
                <img src={scissor}/>
            </div>
            <div className='card rock'>
                <img src={rock}/>
            </div>
            <div className='card paper'>
                <img src={paper}/>
            </div>
        </div>
    </div>
  )
}

export default PlayingScene