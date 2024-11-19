import swimming from "../assets/swimming.png"
import Class from "../assets/class.png"
import play from "../assets/playground.png" 

const QZone = () => {
    return (
        <div className="bg-gray-200">
            <p>Q-Zone</p>
        <div className="swimming">
            <img src={swimming} alt=""/>
        </div> 
        <div className="Class">
            <img src={Class} alt=""/>
        </div> 
        <div className="play">
            <img src={play} alt=""/>
        </div>    
        </div>
    );
};

export default QZone;