import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.headercss}>
        
        <div>
            <img src="https://i.pravatar.cc/100" alt="logo" />
        </div>
        <div className={styles.navcss}>
        <nav>
                <ul className={styles.licss}> 
                    <li >
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li>
                        <Link  to="/about">O nas</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                    
                </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header