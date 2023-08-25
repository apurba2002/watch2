import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Top from './component/top';
import './function.css';
function App() {
  let top_1_img = "asset/1818983.png.transform.global_square_image_500.avif"
  let top_1_tittle_1 = "paneri"
  let top_1_tittle_2 = "submersible"


  let top_2_img = "asset/black.png"
  let top_2_tittle_1 = "breting choroliner"
  let top_2_tittle_2 = "black steel"

  setTimeout(() => {
    document.getElementById("top-1").style.display = "none";
    document.getElementById("top-2").style.display = "block";
    setTimeout(() => {
      document.getElementById("top-2").style.display = "none";
      document.getElementById("top-1").style.display = "block";


    }, 6000)

  }, 6000)

  return (
    <>
      <Nav />
      <div id='top-1'>
        <Top img={top_1_img} tittle_1={top_1_tittle_1} tittle_2={top_1_tittle_2} />
      </div>
      <div id='top-2'>
        <Top img={top_2_img} tittle_1={top_2_tittle_1} tittle_2={top_2_tittle_2} />
      </div>
    </>

  );
}

export default App;
