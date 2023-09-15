import '../App.css';
import '../animation.css';


function Top(props) {
    return (
        <>
            <div className="top"  style={{backgroundColor:props.color}}>
                <div className="hero">
                    <div className="hero-txt">
                        <p>{props.tittle_1}</p>
                        <p>{props.tittle_2}</p>
                        
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            voluptatem blanditiis dolores earum beatae inventore modi alias
                            incidunt. Cumque, praesentium.
                        </p>
                        <button>buy now</button>
                    </div>
                    <div className="hero-img">
                        <img
                            src={props.img}
                            alt=""
                        />
                    </div>
                </div>
            </div>

        </>

    )

}
export default Top;