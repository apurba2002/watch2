import '../App.css';
import '../animation.css';
function Left_img(props) {
    return (
        <>
            <div class="left-img">
                <div class="left-img-txt">
                    <p>{props.tittle_1}</p>
                    <p>{props.tittle_2}</p>
                    <p>{props.price}</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                        illum architecto iure placeat dolore. Quas eos quasi ex alias libero.
                    </p>
                    <button>buy now</button>
                </div>
                <div class="left-img-img">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </>
    )

}
export default Left_img;