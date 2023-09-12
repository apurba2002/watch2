import "../App.css";
function Product_list(props) {
  return (
    <>
      <div className="product">
        <p>you may also be into</p>
        <div className="card-grp">
          <div className="card" onClick={()=>{window.location.href="/p2"}}>
            <img src={props.product_1_img} alt="" />
            <p>{props.product_1_tittle_1}</p>
            <p>{props.product_1_tittle_2}</p>
            <p>{props.product_1_price}</p>
          </div>
          <div className="card">
            <img src={props.product_2_img} alt="" />
            <p>{props.product_2_tittle_1}</p>
            <p>{props.product_2_tittle_2}</p>
            <p>{props.product_2_price}</p>
          </div>
          <div className="card">
            <img src={props.product_3_img} alt="" />
            <p>{props.product_3_tittle_1}</p>
            <p>{props.product_3_tittle_2}</p>
            <p>{props.product_3_price}</p>
          </div>
          <div className="card" onClick={()=>{window.location.href="/"}}>
            <img src={props.product_4_img} alt="" />
            <p>{props.product_4_tittle_1}</p>
            <p>{props.product_4_tittle_2}</p>
            <p>{props.product_4_price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product_list;
