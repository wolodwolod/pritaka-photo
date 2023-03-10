import { HandySvg } from 'handy-svg';
import './footer.scss';
// import '../../shared/styles/fontello.css'
// import inst_Logo from '../../shared/icons/Instagram-Logo-neg.svg';
import inst_Icon from '../../shared/icons/icons8-instagram.svg';
// import inst_Text_Logo from '../../shared/icons/Instagram-Text-Logo-neg.svg';
// import fb_Logo from '../../shared/icons/Facebook-Logo-neg.svg';
import fb_Icon from '../../shared/icons/icons8-facebook.svg';
// import fb_Text_Logo from '../../shared/icons/Facebook-Text-Logo-neg.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="btn-footer_wrapper">
              <a
                href="https://www.instagram.com/tatianapritaka/"
                title="INSTAGRAM"
                target="_blank"
                rel="noreferrer"
                className="btn-footer"
              >
                <HandySvg
                  className="d-inline-block align-text-top social-icon"
                  src={inst_Icon}                  
                  width="40"
                  height="40"
                />
                {/* <img
                  src={inst_Logo}
                  alt="Logo"
                  width="80"
                  // height="48"
                  className="d-inline-block align-text-top"
                /> */}
                {/* <img
                    src={inst_Text_Logo}
                    alt="Logo"
                    width="80"
                    // height="48"
                    className="d-inline-block align-text-top"
                  /> */}
              </a>
              <a
                href="https://www.facebook.com/photopritaka"
                title="FACEBOOK"
                target="_blank"
                rel="noreferrer"
                className="btn-footer"
              >
                  <HandySvg
                  className="d-inline-block align-text-top social-icon"
                  src={fb_Icon}
                  width="40"
                  height="40"
                />
                {/* <img
                  src={fb_Logo}
                  alt="Logo"
                  width="80"
                  // height="24"
                  className="d-inline-block align-text-top"
                /> */}
                {/* <img
                    src={fb_Text_Logo}
                    alt="Logo"
                    width="80"
                    // height="24"
                    className="d-inline-block align-text-top"
                  /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
