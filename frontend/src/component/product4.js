import "../App.css";
import Top from "./top";
import Detail from "./detail";
import Left_img from "./left-img";
import Right_img from "./right_img";
import Nav from "./nav";

let nav_4_color = "red";

let top_4_img = "asset/gray.png";
let top_4_tittle_1 = "Turbine Gmt De";
let top_4_tittle_2 = "Perfect";
let top_4_color = "red";

let detail_4_tittle_1 = "Turbine Gmt De";
let detail_4_tittle_2 = "Perfect";
let detail_4_img = "asset/gray.png";

let Left_img_4_img = "asset/p4.1.png";
let Left_img_4_tittle_1 = "people create all kind of";
let Left_img_4_tittle_2 = "fancy watches";
let Left_img_4_price = "$270";

let Right_img_4_img = "asset/p4.1.png";
let Right_img_4_tittle_1 = "people create all kind of";
let Right_img_4_tittle_2 = "fancy watches";
let Right_img_4_price = "$270";

function Product4() {
  return (
    <>
      <Nav color={nav_4_color} />
      <Top
        img={top_4_img}
        tittle_1={top_4_tittle_1}
        tittle_2={top_4_tittle_2}
        color={top_4_color}
      />
      <Detail
        tittle_1={detail_4_tittle_1}
        tittle_2={detail_4_tittle_2}
        img={detail_4_img}
      />
      <Left_img
        tittle_1={Left_img_4_tittle_1}
        tittle_2={Left_img_4_tittle_2}
        price={Left_img_4_price}
        img={Left_img_4_img}
      />
      <Right_img
        img={Right_img_4_img}
        tittle_1={Right_img_4_tittle_1}
        tittle_2={Right_img_4_tittle_2}
        price={Right_img_4_price}
      />
    </>
  );
}
export default Product4;
