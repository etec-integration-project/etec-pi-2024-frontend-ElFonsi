import React from 'react';
import mousepointer from '../multimedia/mouse-pointer.svg'
import video from '../multimedia/video.svg'
import crosshair from '../multimedia/crosshair.svg'
import printer from '../multimedia/printer.svg'
import laptop from '../multimedia/laptop.svg'
import principal from '../multimedia/principal.png'


const MainSection = () => {
    return (
                <div>
                    <main>
                <section>
                    <img id="img_principal" src={principal} alt="principal"/>
                </section>
            </main>
            <section id="PC_armadas">
                <div class="Links_PCs">
                    <a class="l_p" href="">
                        PC para<br/>
                        diseño<br/>
                        <img class="img_pcs" src={mousepointer} alt=""/>
                    
                    </a>
                </div>
                <div class="Links_PCs">
                    <a class="l_p" href="">
                        PC para<br/>
                        OFICINA<br/>
                        <img class="img_pcs" src={printer} alt=""/>
                    
                    </a>
                </div>
                <div class="Links_PCs">
                    <a class="l_p" href="">
                        PC para<br/>
                        GAMING<br/>
                        <img class="img_pcs" src={crosshair} alt=""/>
                    
                    </a>
                    
                </div>
                <div class="Links_PCs">
                    <a class="l_p" href=""> 
                        PC para<br/>
                        EDICION<br/>
                        <img class="img_pcs" src={video} alt=""/>
                    
                    </a>
                    
                </div>

                <div class="Links_PCs">
                    <a class="l_p" href=""> 
                        NOTEBOOKS<br/>
                        <img class="img_pcs" src={laptop} alt=""/>
                    
                    </a>
                    
                </div>
            </section>

            <br></br>
        </div>
    );
};

export default MainSection;