import "../App.css";
import "../animation.css";
function Right_img(props) {
  return (
    <>
      <div className="right-img">
        <div className="right-img-img">
          <img src={props.img}alt="" />
        </div>
        <div className="right-img-txt">
          <p>{props.tittle_1}</p>
          <p>{props.tittle_2}</p>
          <p>{props.price}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            illum architecto iure placeat dolore. Quas eos quasi ex alias
            libero.
          </p>
          <button>learn more</button>
        </div>
      </div>
      <div className="right-img-bg"></div>
    </>
  );
}
export default Right_img;
