
import "../App.css";
import Nav from "../component/nav";
import Top from "../component/top";

import Detail from "../component/detail";
import Left_img from "../component/left-img";
import Right_img from "../component/right_img";
import Product_list from "../component/product-list";
import Footer from "../component/footer";
import { product_list_product_1_img } from "../App";
import { product_list_product_1_price } from "../App";
import { product_list_product_1_tittle_1 } from "../App";
import { product_list_product_1_tittle_2 } from "../App";
import { product_list_product_2_img } from "../App";
import { product_list_product_2_price } from "../App";
import { product_list_product_2_tittle_1 } from "../App";
import { product_list_product_2_tittle_2 } from "../App";
import { product_list_product_3_img } from "../App";
import { product_list_product_3_price } from "../App";
import { product_list_product_3_tittle_1 } from "../App";
import { product_list_product_3_tittle_2 } from "../App";
import { product_list_product_4_img } from "../App";
import { product_list_product_4_price } from "../App";
import { product_list_product_4_tittle_1 } from "../App";
import { product_list_product_4_tittle_2 } from "../App";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      
      <Product_list
        product_1_img={product_list_product_1_img}
        product_2_img={product_list_product_2_img}
        product_3_img={product_list_product_3_img}
        product_4_img={product_list_product_4_img}
        product_1_tittle_1={product_list_product_1_tittle_1}
        product_2_tittle_1={product_list_product_2_tittle_1}
        product_3_tittle_1={product_list_product_3_tittle_1}
        product_4_tittle_1={product_list_product_4_tittle_1}
        product_1_tittle_2={product_list_product_1_tittle_2}
        product_2_tittle_2={product_list_product_2_tittle_2}
        product_3_tittle_2={product_list_product_3_tittle_2}
        product_4_tittle_2={product_list_product_4_tittle_2}
        product_1_price={product_list_product_1_price}
        product_2_price={product_list_product_2_price}
        product_3_price={product_list_product_3_price}
        product_4_price={product_list_product_4_price}
      />
      <Footer />
    </>
  );
}
export default Layout;