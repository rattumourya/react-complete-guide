import investment_logo from "../assets/investment-calculator-logo.png";

function Header() {
    
    return (
        <header id="header">
            <img src={investment_logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header;