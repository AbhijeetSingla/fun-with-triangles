function Footer() {
    return (
      <footer className="footer-base flex">
        <div className="footer-heading">Social Links</div>
        <ul className="footer-social-links list-style-none flex">
            <li><a href="https://linkedin.com/in/abhijeetsingla1553" target="_blank" rel="noopener noreferrer"><img
                        src="https://as1553-component-library.netlify.app/media/icons/linkedin.svg" alt="linkedin" width="25px" height="25px"/></a></li>
            <li><a href="https://github.com/AbhijeetSingla" target="_blank" rel="noopener noreferrer"><img src="https://as1553-component-library.netlify.app/media/icons/github.svg"
                        alt="github" width="25px" height="25px"/></a></li>
            <li><a href="mailto:abhijeetsingla1553@gmail.com"><img src="https://as1553-component-library.netlify.app/media/icons/email.svg" alt="email" width="25px"
                        height="25px"/></a></li>
        </ul>
        <p>No Copyright &#169; 2022. Made by Abhijeet Singla</p>
    </footer>
    )
}

export default Footer;