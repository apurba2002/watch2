import '../App.css';
import '../animation.css';
function Detail(props) {
    return (
        <>
            <div className="detail">
                <div className="detail-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="detail-txt">
                    <p>{props.tittle_1}</p>
                    <p>{props.tittle_2}</p>
                    <div className="row1">
                        <div>
                            <p>a high water resistant</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, hic!
                            </p>
                        </div>
                        <div>
                            <p>a case and strap made of solid leather</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, hic!
                            </p>
                        </div>
                    </div>
                    <div className="row2">
                        <div>
                            <p>an automatic movment rather than quertz</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, hic!
                            </p>
                        </div>
                        <div>
                            <p>comfortable wrist band design</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Detail;