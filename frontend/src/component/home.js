import Top from "../component/top";
import Nav from "../component/nav";
import Left_img from "../component/left-img";
import Right_img from "../component/right_img";
import "../App.css";

import { nav_1_color, top_1_img } from "../App";
import { top_1_tittle_1 } from "../App";
import { top_1_tittle_2 } from "../App";
import { detail_1_img } from "../App";
import { detail_1_tittle_1 } from "../App";
import { detail_1_tittle_2 } from "../App";
import { Left_img_1_img } from "../App";
import { Left_img_1_price } from "../App";
import { Left_img_1_tittle_1 } from "../App";
import { Left_img_1_tittle_2 } from "../App";
import { Right_img_1_img } from "../App";
import { Right_img_1_price } from "../App";
import { Right_img_1_tittle_1 } from "../App";
import { Right_img_1_tittle_2 } from "../App";
import Detail from "./detail";

function Home() {
  return (
    <>
      <div id="product-1">
        <div id="top-1">
        <Nav color={nav_1_color} />
          <Top
            img={top_1_img}
            tittle_1={top_1_tittle_1}
            tittle_2={top_1_tittle_2}
          />
        </div>
        <Detail
          tittle_1={detail_1_tittle_1}
          tittle_2={detail_1_tittle_2}
          img={detail_1_img}
        />

        <Left_img
          tittle_1={Left_img_1_tittle_1}
          tittle_2={Left_img_1_tittle_2}
          price={Left_img_1_price}
          img={Left_img_1_img}
        />
        <Right_img
          img={Right_img_1_img}
          tittle_1={Right_img_1_tittle_1}
          tittle_2={Right_img_1_tittle_2}
          price={Right_img_1_price}
        />
      </div>
    </>
  );
}
export default Home;
