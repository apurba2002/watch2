import "../App.css";
import Top from "../component/top";
import Detail from "../component/detail";
import Left_img from "../component/left-img";
import Right_img from "../component/right_img";
import Nav from "../component/nav";

let nav_2_color = "#43453d";

let top_2_img = "asset/black.png";
let top_2_tittle_1 = "breting choroliner";
let top_2_tittle_2 = "black steel";
let top_2_color = "#43453d";

let detail_2_tittle_1 = "breting choroliner";
let detail_2_tittle_2 = "pblack steel";
let detail_2_img = "asset/black.png";

let Left_img_2_img = "asset/p2.2.png";
let Left_img_2_tittle_1 = "people create all kind of";
let Left_img_2_tittle_2 = "fancy watches";
let Left_img_2_price = "$220";

let Right_img_2_img = "asset/p2.1.png";
let Right_img_2_tittle_1 = "people create all kind of";
let Right_img_2_tittle_2 = "fancy watches";
let Right_img_2_price = "$220";

function Product2() {
  return (
    <>
      <Nav color={nav_2_color} />
      <Top
        img={top_2_img}
        tittle_1={top_2_tittle_1}
        tittle_2={top_2_tittle_2}
        color={top_2_color}
      />
      <Detail
        tittle_1={detail_2_tittle_1}
        tittle_2={detail_2_tittle_2}
        img={detail_2_img}
      />
      <Left_img
        tittle_1={Left_img_2_tittle_1}
        tittle_2={Left_img_2_tittle_2}
        price={Left_img_2_price}
        img={Left_img_2_img}
      />
      <Right_img
        img={Right_img_2_img}
        tittle_1={Right_img_2_tittle_1}
        tittle_2={Right_img_2_tittle_2}
        price={Right_img_2_price}
      />
    </>
  );
}
export default Product2;
