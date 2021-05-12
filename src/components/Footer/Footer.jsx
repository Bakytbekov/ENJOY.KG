import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';



const Footer = () => {
    return (
    <>
        {/* <footer class="container-fluid bg-grey py-5">
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 <div class="row">
                    <div class="col-md-6 ">
                       <div class="logo-part">
                          <img src="https://i.ibb.co/sHZz13b/logo.png" class="w-50 logo-footer"/>
                          <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                          <p>Use this tool as test data for an automated system or find your next pen</p>
                       </div>
                    </div>
                    <div class="col-md-6 px-4">
                       <h6> About Company</h6>
                       <p>But horizontal lines can only be a full pixel high.</p>
                       <a href="#" class="btn-footer"> More Info </a><br/>
                       <a href="#" class="btn-footer"> Contact Us</a>
                    </div>
                 </div>
              </div>
              <div class="col-md-6">
                 <div class="row">
                    <div class="col-md-6 px-4">
                       <h6> Help us</h6>
                       <div class="row ">
                          <div class="col-md-6">
                             <ul>
                                <li> <a href="#"> Home</a> </li>
                                <li> <a href="#"> About</a> </li>
                                <li> <a href="#"> Service</a> </li>
                                <li> <a href="#"> Team</a> </li>
                                <li> <a href="#"> Help</a> </li>
                                <li> <a href="#"> Contact</a> </li>
                             </ul>
                          </div>
                          <div class="col-md-6 px-4">
                             <ul>
                                <li> <a href="#"> Cab Faciliy</a> </li>
                                <li> <a href="#"> Fax</a> </li>
                                <li> <a href="#"> Terms</a> </li>
                                <li> <a href="#"> Policy</a> </li>
                                <li> <a href="#"> Refunds</a> </li>
                                <li> <a href="#"> Paypal</a> </li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    <div class="col-md-6 ">
                       <h6> Newsletter</h6>
                       <div class="social">
                          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                       </div>
                       <form class="form-footer my-3">
                          <input type="text"  placeholder="search here...." name="search"/>
                          <input type="button" value="Go" />
                       </form>
                       <p>That's technology limitation of LCD monitors</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </footer> */}

        <div className="footer-container">
            <div className="footer-links d-flex flex-wrap">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2 className="information">Информация</h2>
                        <Link to="/">Главная</Link>
                        <Link to="/" >Туры</Link>
                        <Link to="/sale" >Акции</Link>
                        <Link to="/contacts">Контакты</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Контакты</h2>
                        <Link to="/">+996 (551) 68-00-68</Link>
                        <Link to="/" >+996 (771) 68-00-68</Link>
                        <Link to="/" >+996 (501) 68-00-68</Link>
                        <Link to="/" >Адрес:</Link>
                        <Link to="/" >ул. Киевская 93, Напротив "Военторга"</Link>
                        <Link to="/" >E-mail</Link>
                        <Link to="/" >info@putevka.kg</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Мы в соц.сетях</h2>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram">  enjoy.kg</i>
                        </Link>
                        <Link className="social-icon-link facebok"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f">   enjoy.kg</i>
                        </Link> 
                        <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube">  Kaifarik Kyrgyz</i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"> enjoy.kg</i>
                        </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Мы находимся</h2>
                        <Link to="/"><i className="fas fa-map-marker-alt"> Panfilova 55 </i></Link>
                        <Link to="/" ><i className="far fa-envelope"></i> enjoy@gmail.com </Link>
                        <Link to="/" ><i className="fas fa-phone"></i> 0312 14-24-56</Link>
                        {/* IT IS COMMENT <Link to="/" >Sponsorships</Link> */}
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                       ENJOY.KG
                        </Link>
                    </div>
                    <small className="website-rights"></small>
                    <div className="social-icons">
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link facebok"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </>
    );
};

export default Footer;