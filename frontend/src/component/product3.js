import "../App.css";
import Top from "../component/top";
import Detail from "../component/detail";
import Left_img from "../component/left-img";
import Right_img from "../component/right_img";
import Nav from "../component/nav";

let nav_3_color = "orange";

let top_3_img = "asset/orange.png";
let top_3_tittle_1 = "Jungharna Speaktrum";
let top_3_tittle_2 = "Automatic";
let top_3_color = "orange";

let detail_3_tittle_1 = "Jungharna Speaktrum";
let detail_3_tittle_2 = "Automatic";
let detail_3_img = "asset/orange.png";

let Left_img_3_img = "asset/p3.1.jpg";
let Left_img_3_tittle_1 = "people create all kind of";
let Left_img_3_tittle_2 = "fancy watches";
let Left_img_3_price = "$190";

let Right_img_3_img = "asset/p3.0.jpg";
let Right_img_3_tittle_1 = "people create all kind of";
let Right_img_3_tittle_2 = "fancy watches";
let Right_img_3_price = "$190";

function Product3() {
  return (
    <>
      <Nav color={nav_3_color} />
      <Top
        img={top_3_img}
        tittle_1={top_3_tittle_1}
        tittle_2={top_3_tittle_2}
        color={top_3_color}
      />
      <Detail
        tittle_1={detail_3_tittle_1}
        tittle_2={detail_3_tittle_2}
        img={detail_3_img}
      />
      <Left_img
        tittle_1={Left_img_3_tittle_1}
        tittle_2={Left_img_3_tittle_2}
        price={Left_img_3_price}
        img={Left_img_3_img}
      />
      <Right_img
        img={Right_img_3_img}
        tittle_1={Right_img_3_tittle_1}
        tittle_2={Right_img_3_tittle_2}
        price={Right_img_3_price}
      />
    </>
  );
}
export default Product3;
