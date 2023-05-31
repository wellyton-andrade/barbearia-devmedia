import React, {useState} from "react";
import './css/index.css';
import logo from './css/barbearia-logo.png';
import moon from './css/moon.png';
import sun from './css/sun.png';

function App(){
const [mode, change] = useState('');
const [button, trocar] = useState(<Buttondark/>);
document.body.className = mode;




function Buttonwhite(){
    return(<button onClick={Whitemode} className={`bt dark`}><img src={sun} alt="sun" className="lua"/> Light</button>);
}
function Buttondark(){

    return(<button onClick={Darkmode} className="bt"><img src={moon} alt="lua" className="lua"/> Dark</button>);
}
function Darkmode(){
 change("dark");
trocar(<Buttonwhite/>);
}
function Whitemode(){
    change("white");
   trocar(<Buttondark/>);
   }
return(<body className={`${mode}`}>


<header className={`topo ${mode}`}>
   <img src={logo} alt="logo" className="logo"/>
   {button}
   </header>

<footer className={`footer ${mode}`}>
    <div className="banner"/>
    <div className="about">
    <h3 className="welcome">Bem-vindo a Barber Shop</h3>
    <span className={'paragraph'}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
    </span>
    <p className={`detalhesp`}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
    <p className="assinatura">S. Kelly</p>
    </div>
</footer>


</body>);
}

export default App;
