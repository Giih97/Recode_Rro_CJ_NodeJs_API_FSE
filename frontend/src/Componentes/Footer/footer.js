import "./footer.css";
import formadepagamento from "./formadepagamento.png"

export default function Footer() {
    return (
        <footer>
            <div id="formas_pagamento">
                <img src={formadepagamento} alt="formas de pagamento
                 "style = {{width: "18rem"}}/>
            </div>
                <br/>
            <div className="copyRecode">
                <p id="copy"> &copy; Gilda Monteiro 2020</p>
            </div>
        </footer>
    )
}