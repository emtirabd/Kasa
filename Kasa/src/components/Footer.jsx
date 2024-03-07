import logoKasaFooter from "../assets/logoKasaFooter.svg"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoKasaFooter} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;