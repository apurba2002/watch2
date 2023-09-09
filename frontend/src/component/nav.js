import { Link } from 'react-router-dom';
import '../App.css';
function Nav() {
    return (
        <>
            <div className="nav-wap">
                <div className="nav">
                    <p>watch</p>
                    <div>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/p2">product</Link></p>
                        <p>about</p>
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