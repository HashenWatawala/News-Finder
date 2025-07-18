import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {
    const{onSet,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Micky</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello! Dev</span></p>
                <p>Let's get started!</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Find lstest news on world</p>
                    <img src={assets.earth_icon} alt="" />
                </div>
                <div className="card">
                    <p>Search news by your favorite topics</p>
                    <img src={assets.earth_icon} alt="" />
                </div>
                <div className="card">
                    <p>Get local news updates near you</p>
                    <img src={assets.earth_icon} alt="" />
                </div>
                <div className="card">
                    <p>Ask about trending news right now</p>
                    <img src={assets.earth_icon} alt="" />
                </div>
            </div>
            </>
            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.news_icon} alt="" />
                    {loading
                    ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    } 
                    
                </div>
            </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Search news..." />
                    <div>
                        <img src={assets.gallary_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSet()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                Ask anything and get the latest news instantly. From global events to local updates—your AI guide is ready.
                </p>

            </div>
        </div>
    </div>
  )
}

export default Main
