import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { topicContext } from '../../context/TopicContext';
import "./Navbar.css";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const history = useHistory()
  let search = new URLSearchParams(history.location.search)

  const [searchValue, setSearchValue] = useState(search.get("q") || "")

  const { searchData, getTopics } = useContext(topicContext)

  const handleValue = (e) => {
    setSearchValue(e.target.value)
    // search(e.target.value)
    getProductsByFilters("q", e.target.value)
  }
  useEffect(() => {
    getTopics()
  }, [history.location])

  function getProductsByFilters(filterKey, filterValue) {

    search.set(filterKey, filterValue)
    let url = `${history.location.pathname}?${search.toString()}`
    history.push(url)
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            ENJOY.KG
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>Главная</Link>
            </li>
            <li className='nav-item'><Link to='/viza' className='nav-links' onClick={closeMenu}>Визы</Link>
            </li>
            <li className='search-item'><input value={searchValue} placeholder="Поиск" onChange={handleValue} />
              <div className="search-result">

                {searchData.map(item => (
                  <Link to={`/details/${item.id}`}>
                    <div>{item.title}</div>
                  </Link>
                ))}
              </div>

            </li>
            
            <Link to="/cart" className='nav-item'><Link to='/cart' className='nav-links' onClick={closeMenu}><BookmarkBorderIcon/></Link>
            </Link>
            <li>
              <Link
                to="/signup"
                className="nav-links"
                onClick={closeMenu}
              >
                Регистрация
                  </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMenu}
              >
                Войти
                            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
