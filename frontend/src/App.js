import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Top from './component/top';
import './function.css';
import Detail from './component/detail';
function App() {
  let top_1_img = "asset/1818983.png.transform.global_square_image_500.avif"
  let top_1_tittle_1 = "paneri"
  let top_1_tittle_2 = "submersible"


  let top_2_img = "asset/black.png"
  let top_2_tittle_1 = "breting choroliner"
  let top_2_tittle_2 = "black steel"




  let detail_1_tittle_1="marina militare carbotech";
  let detail_1_tittle_2="pam979";
  let detail_1_img="asset/details.jpg";



  return (
    <>
      <Nav />
      <div id="product-1">
        <div id='top-1'>
          <Top img={top_1_img} tittle_1={top_1_tittle_1} tittle_2={top_1_tittle_2} />
        </div>
        <Detail tittle_1={detail_1_tittle_1} tittle_2={detail_1_tittle_2} img={detail_1_img} />

      </div>






      <div id="product-2">
        <div id='top-2'>
          <Top img={top_2_img} tittle_1={top_2_tittle_1} tittle_2={top_2_tittle_2} />
        </div>

      </div>


    </>

  );
}

export default App;
