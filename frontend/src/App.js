import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav";
import Top from "./component/top";
import "./function.css";
import Detail from "./component/detail";
import Left_img from "./component/left-img";
import Right_img from "./component/right_img";
import Product_list from "./component/product-list";
import Footer from "./component/footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./component/home";
import Product2 from "./component/product2";

export let nav_1_color="#4b5320";
export let top_1_img =
  "asset/1818654.png.transform.global_square_image_500.avif";
export let top_1_tittle_1 = "paneri";
export let top_1_tittle_2 = "submersible";
export let top_2_img = "asset/black.png";
export let top_2_tittle_1 = "breting choroliner";
export let top_2_tittle_2 = "black steel";
export let detail_1_tittle_1 = "marina militare carbotech";
export let detail_1_tittle_2 = "pam979";
export let detail_1_img = "asset/details.jpg";

export let Left_img_1_img = "asset/leftimg1.jpg";
export let Left_img_1_tittle_1 = "people create all kind of";
export let Left_img_1_tittle_2 = "fancy watches";
export let Left_img_1_price = "$240";

export let Right_img_1_img = "asset/right-img-1.jpg";
export let Right_img_1_tittle_1 = "people create all kind of";
export let Right_img_1_tittle_2 = "fancy watches";
export let Right_img_1_price = "$240";

export let product_list_product_1_img = "asset/black.png";
export let product_list_product_2_img = "asset/orange.png";

export let product_list_product_3_img = "asset/gray.png";

export let product_list_product_4_img =
  "asset/1818654.png.transform.global_square_image_500.avif";

export let product_list_product_1_tittle_1 = "breting choroliner";
export let product_list_product_2_tittle_1 = "jungharna speaktrum";
export let product_list_product_3_tittle_1 = "turbine gmt de";
export let product_list_product_4_tittle_1 = "Submersible";

export let product_list_product_1_tittle_2 = "black steel";
export let product_list_product_2_tittle_2 = "automatic";
export let product_list_product_3_tittle_2 = "perfect";
export let product_list_product_4_tittle_2 = "Paneri";

export let product_list_product_1_price = "$220";
export let product_list_product_2_price = "$190";
export let product_list_product_3_price = "$270";
export let product_list_product_4_price = "$240";
function App() {
  //for change any kind of data change the value of the variable.

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="p2" element={<Product2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
