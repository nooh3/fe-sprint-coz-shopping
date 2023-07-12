import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
      <header className="header-container">
        <div className='logo-container'>
         <div className='logo-img'>
             <Link to = "/"><img src="logo.png" alt="logo" /></Link>
         </div>
         <span className='logo-title'>COZ Shopping</span>   
        </div>
         <div className="dropdown">
            <button>
              <img src="hamburger button.png" alt="button" />
                <div className="dropdown-options">
                  <span>OOO님, 안녕하세요!</span>
                  <Link to='/products/list'><span className="realclick">상품리스트 페이지</span></Link>
                  <Link to='/bookmark'><span className="realclick">북마크 페이지</span></Link>
              </div>
             </button>
          </div>
      </header>
    );
  }
  
  export default Header;
  