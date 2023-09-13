import { Link } from 'react-router-dom';
import '../App.css';
function Nav(props) {
    return (
        <>
            <div className="nav-wap" style={{backgroundColor:props.color}}>
                <div className="nav">
                    <p>watch</p>
                    <div>
                        <p><Link to="/">Home</Link></p>
                        <p><a href='#product'>Products</a></p>
                        <p><a href='#detail'>about</a></p>
                        <p>review</p>
                    </div>
                    <img
                        src="asset/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.avif"
                        alt=""
                    />
                </div>
            </div>

        </>
    )
}
export default Nav;