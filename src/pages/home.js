import React from "react";

class Home extends React.Component{
    render(){
        return (
        <div>
                    {/* <!--===== HEADER =====--> */}
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">Debidatta</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <main class="l-main">
           {/*  <!--===== HOME =====--> */}
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Debidatta</span><br/> Web Designer</h1>

                    <a href="#contact" class="button">Contact</a>
                </div>

                <div class="home__social">
                    <a href="" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-behance'></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-github'></i></a>
                </div>

                <div class="home__img">    
                    <img src="assets/profile.jpg" alt="" />
                </div>
            </section>

            {/* <!--===== ABOUT =====--> */}
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src="assets/profile.jpg" alt="" />
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">I'am Debidatta</h2>
                        <p class="about__text">I am a first year B.Tech Undergrad at Odisha University Of Technology and Research. I am into Full Stack Web Development and Competitive Programming.</p>           
                    </div>                                   
                </div>
            </section>

            {/* <!--===== SKILLS =====--> */}
            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Profesional Skills</h2>
                        <p class="skills__text">I have learned Web Developemnt myself without paying anything from anywhere.</p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">30%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon'></i>
                                <span class="skills__name">UX/UI</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">60%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="assets/work3.jpg" alt="" class="skills__img" />
                    </div>
                </div>
            </section>

            {/* <!--===== WORK =====--> */}
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    <div class="work__img">
                        <a href="https://2-degree.netlify.app/"><img src="assets/2-degree.png" alt="" /></a>
                    </div>
                    <div class="work__img">
                        <a href="https://debidattasuryaprakash.github.io/covid-website/"><img src="assets/couiz.png" alt="" /></a>
                    </div>
                    <div class="work__img">
                        <a href="https://github.com/debidattasuryaprakash/DEV-FEST-2.0"><img src="assets/e-troops.png" alt="" /></a>
                    </div>
                    <div class="work__img">
                        <a href="https://opentek.live/"><img src="assets/opentek-contributor.png" alt="" /></a>
                    </div>
                    <div class="work__img">
                        <a href="https://debidattasuryaprakash.github.io/project-ions/"><img src="assets/projections.png" alt="" /></a>
                    </div>
                    <div class="work__img">
                        <a href="https://seashore-grasp.vercel.app/"><img src="assets/seashorecontributor.png" alt="" /></a>
                    </div>
                </div>
            </section>

            {/* <!--===== CONTACT =====--> */}
            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="mailto:suryaprakash.d20@gmail.com" class="contact__form" method="POST" enctype="multipart/form-data" name="EmailForm">
                        <input type="text" placeholder="Name" class="contact__input" />
                        <input type="mail" placeholder="Email" class="contact__input" />
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="submit" value="Submit" class="contact__button button" />
                    </form>
                </div>
            </section>
        </main>

        {/* <!--===== FOOTER =====--> */}
        <footer class="footer">
            <p class="footer__title">DEBIDATTA</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>


        {/* <!--===== SCROLL REVEAL =====--> */}
        <script src="https://unpkg.com/scrollreveal"></script>

        {/* <!--===== MAIN JS =====--> */}
        <script src="assets/main.js"></script>
        </div>
        );
    }
}

export default Home;
