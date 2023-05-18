import Detail from './Detail';
import styles from '../css/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){

    return(
        <div>
            <div className={styles.navbar}>
                <h1 className={styles.h1}><a href="localhost:3000/">CearchEP</a></h1>
            </div>
            
            <ul className="nav justify-content-end">
                <div className={styles.lista}>
                    <li className={styles.li}><a href="#">Home</a></li>
                    <li className={styles.li}><a href="#">Consultar</a></li>
                    <li className={styles.li}><a href="#">Nossos Serviços</a></li>
                    <li className={styles.li}><a href="#">Fale Conosco</a></li>
                </div>  
            </ul>
        

        </div>
    )

    
}

export default Header