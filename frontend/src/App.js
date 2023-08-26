import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav";
import Top from "./component/top";
import "./function.css";
import Detail from "./component/detail";
import Left_img from "./component/left-img";
import Right_img from "./component/right_img";
function App() {

  //for change any kind of data change the value of the variable.
  
  let top_1_img = "asset/1818983.png.transform.global_square_image_500.avif";
  let top_1_tittle_1 = "paneri";
  let top_1_tittle_2 = "submersible";

  let top_2_img = "asset/black.png";
  let top_2_tittle_1 = "breting choroliner";
  let top_2_tittle_2 = "black steel";

  let detail_1_tittle_1 = "marina militare carbotech";
  let detail_1_tittle_2 = "pam979";
  let detail_1_img = "asset/details.jpg";

  let Left_img_1_img = "asset/leftimg1.jpg";
  let Left_img_1_tittle_1 = "people create all kind of";
  let Left_img_1_tittle_2 = "fancy watches";
  let Left_img_1_price = "$240";

  let Right_img_1_img = "asset/right-img-1.jpg";
  let Right_img_1_tittle_1 = "people create all kind of";
  let Right_img_1_tittle_2 = "fancy watches";
  let Right_img_1_price = "$240";

  return (
    <>
      <Nav />
      <div id="product-1">
        <div id="top-1">
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

      <div id="product-2">
        <div id="top-2">
          <Top
            img={top_2_img}
            tittle_1={top_2_tittle_1}
            tittle_2={top_2_tittle_2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
