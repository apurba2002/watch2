import "../App.css";
import Top from "../component/top";

let top_2_img = "asset/black.png";
let top_2_tittle_1 = "breting choroliner";
let top_2_tittle_2 = "black steel";
function Product2() {
  return (
    <>
      <Top
        img={top_2_img}
        tittle_1={top_2_tittle_1}
        tittle_2={top_2_tittle_2}
      />
    </>
  );
}
export default Product2;
