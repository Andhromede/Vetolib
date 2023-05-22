import '../components/css/footer.css';


const Footer = (props) => {
    return (
        <footer className="page-footer font-small cyan darken-3 myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="flex-center">
                            <a className="fb-ic">
                                <i className="bi bi-arrow-90deg-up"></i>
                            </a>

                            <a className="tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>

                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>

                            <a className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>

                            <a className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>

                            <a className="pin-ic">
                                <i className="fab fa-pinterest fa-lg white-text fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="https://mdbootstrap.com/">Character Builder</a>
            </div>
        </footer>
    )
}

export default Footer;
