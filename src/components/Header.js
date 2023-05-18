import Detail from './Detail';
import styles from '../css/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){

    return(
        <div>
            <div className={styles.navbar}>
                <h1 className={styles.title}><a href="localhost:3000/">CearchEP</a></h1>
            </div>
            
            <ul className="nav justify-content-end">
                <div className={styles.lista}>
                <nav class="nav nav-pills nav-fill">
                    <a class="nav-item nav-link" href="#">Home</a>
                    <a class="nav-item nav-link active" href="#">Consultar</a>
                    <a class="nav-item nav-link" href="#">Fale Conosco</a>
                    <a class="nav-item nav-link" href="#">Contato</a>
                </nav>
                </div>  
            </ul>
        
        <br/><br/>

        </div>
    )

    
}

export default Header