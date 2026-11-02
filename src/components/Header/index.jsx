import './index.css'
import { Link } from 'react-router'
const Header = () => {
    return (
        <header className="header">
            <h1 className="title">
                <Link className="nav_item" to="/">E-Commerce</Link>
            </h1>
            <ul className="nav">
                <li>
                    <Link className="nav_item" to="/">Home</Link>
                </li>
                <li >
                    <Link className="nav_item" to="/products">products</Link>
                </li>
                <li >
                    <Link className="nav_item" to="/cart">cart</Link>
                </li>
            </ul>
            <button className="btn">Login</button>
        </header>
    )
}
export default Header;
