import "./style.css";
import frittosLogo from "../../assets/img/frittos.png";

export  function Header(){
    return(
        <header>
            <img src={frittosLogo} alt="Mr. Frittos Logo"/>


            <div className="links">
                <a href="">CARDÁPIO</a>
                <a href="">QUEM SOMOS</a> 
                <a href="">LOGIN</a> 
            </div>

        </header>
        
    );
};