import React from 'react';
import './main_section_styles.css'
import mousepointer from '../multimedia/mouse-pointer.svg';
import video from '../multimedia/video.svg';
import crosshair from '../multimedia/crosshair.svg';
import printer from '../multimedia/printer.svg';
import laptop from '../multimedia/laptop.svg';
import principal from '../multimedia/principal.png';

const MainSection = () => {
    return (
        <div className="main-container">
            <main>
                <section>
                    <img id="img_principal" src={principal} alt="principal" />
                </section>
            </main>
            <section id="PC_armadas">
                <div className="Links_PCs">
                    <a className="l_p" href="">
                        PC para<br />
                        diseño<br />
                        <img className="img_pcs" src={mousepointer} alt="" />
                    </a>
                </div>
                <div className="Links_PCs">
                    <a className="l_p" href="">
                        PC para<br />
                        OFICINA<br />
                        <img className="img_pcs" src={printer} alt="" />
                    </a>
                </div>
                <div className="Links_PCs">
                    <a className="l_p" href="">
                        PC para<br />
                        GAMING<br />
                        <img className="img_pcs" src={crosshair} alt="" />
                    </a>
                </div>
                <div className="Links_PCs">
                    <a className="l_p" href="">
                        PC para<br />
                        EDICIÓN<br />
                        <img className="img_pcs" src={video} alt="" />
                    </a>
                </div>
                <div className="Links_PCs">
                    <a className="l_p" href="">
                        NOTEBOOKS<br />
                        <img className="img_pcs" src={laptop} alt="" />
                    </a>
                </div>
            </section>
            <br />
        </div>
    );
};

export default MainSection;
