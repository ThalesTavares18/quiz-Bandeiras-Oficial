'use client'
import { useState } from "react";
import "./projeto.css"


function Quizbandeiras(){
    
    const [b1, alterab1] = useState(0)
    const [b2, alterab2] = useState(0)
    const [b3, alterab3] = useState(0)
    const [b4, alterab4] = useState(0)
    const [b5, alterab5] = useState(0)
    const [b6, alterab6] = useState(0)
    const [b7, alterab7] = useState(0)
    const [b8, alterab8] = useState(0)
    const [b9, alterab9] = useState(0)

    const [mostrab1, alteraMostrab1] = useState(true)
    const [mostrab2, alteraMostrab2] = useState(false)
    const [mostrab3, alteraMostrab3] = useState(false)
    const [mostrab4, alteraMostrab4] = useState(false)
    const [mostrab5, alteraMostrab5] = useState(false)
    const [mostrab6, alteraMostrab6] = useState(false)
    const [mostrab7, alteraMostrab7] = useState(false)
    const [mostrab8, alteraMostrab8] = useState(false)
    const [mostrab9, alteraMostrab9] = useState(false)
    const [mostrab10, alteraMostrab10] = useState(false)
    

    const [mostraResposta, alteraMostraResposta] = useState(false)


    const [TotalPontos, alteraTotalPontos] = useState(0)
    
    function somaPontos(valor){

        let totalAtualizado = 0
        totalAtualizado = b1+b2+b3+b4+b5+b6+b7+b8+b9+valor
        
        alteraTotalPontos(totalAtualizado)

        let valorDoBanco = parseInt(localStorage.getItem("total"))

        localStorage.setItem("total", totalAtualizado + valorDoBanco )

    }
    
    return ( 
        <div>
            <h1>QUIZ BANDEIRAS</h1>

            {
                mostrab1 == true &&
               <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png"></img>
                  <div className="divisao">

                    <p onClick={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Brassil</strong> </p>
                    <p onClick={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Basil</strong></p>
                  </div>
                  <div className="divisao">

                    <p onClick={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Drasil</strong></p>
                    <p onClick={ ()=> {alterab1(1); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Brasil</strong></p>

                  </div>
                </div>
            }


            {
                mostrab2 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/125px-Flag_of_Burkina_Faso.svg.png"></img>
                    <div className="divisao">
                        <p onClick={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Gana</strong></p>
                        <p onClick={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Camarões</strong></p>
                   </div>

                    <div className="divisao">
                        <p onClick={ ()=> {alterab2(1); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Burkina Fasso</strong></p>
                        <p onClick={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Moçambique</strong></p>
                    </div>
                </div>

            }


            {
                mostrab3 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira </h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Croácia</strong></p>
                        <p onClick={ ()=> {alterab3(1); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Sérvia</strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Russia</strong></p>
                        <p onClick={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Slováquia</strong></p>

                    </div>

                </div>
            }

            {
                mostrab4 == true &&
                <div>
                    
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png"></img>

                    <div className="divisao">

                    <p onClick={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}><strong>França</strong> </p>
                    <p onClick={ ()=> {alterab4(1); alteraMostrab4(false); alteraMostrab5(true)}}><strong>Itália </strong></p>

                    </div>

                    <div className="divisao">

                    <p onClick={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}><strong>México </strong></p>
                    <p onClick={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}><strong>Austria</strong><strong></strong></p>

                    </div>

                </div>
            }

            {
                mostrab5 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/125px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab5(0);alteraMostrab5(false); alteraMostrab6(true); }}><strong>Chile</strong> </p>
                        <p onClick={ ()=> {alterab5(0);alteraMostrab5(false); alteraMostrab6(true); }}><strong>irã </strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab5(1);alteraMostrab5(false); alteraMostrab6(true); }}><strong>Vaticano</strong> </p>
                        <p onClick={ ()=> {alterab5(0);alteraMostrab5(false); alteraMostrab6(true); }}><strong>Chipre</strong></p>

                    </div>

                </div>
            }   

            {
                mostrab6 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/125px-Flag_of_Jamaica.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab6(1);alteraMostrab6(false); alteraMostrab7(true); }}><strong> Jamaica</strong> </p>
                        <p onClick={ ()=> {alterab6(0);alteraMostrab6(false); alteraMostrab7(true); }}><strong> Nigéria </strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab6(0);alteraMostrab6(false); alteraMostrab7(true); }}><strong> Moçambique</strong> </p>
                        <p onClick={ ()=> {alterab6(0);alteraMostrab6(false); alteraMostrab7(true); }}><strong> Congo </strong></p>

                    </div>

                </div>
            }  

            {
                mostrab7 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab7(0);alteraMostrab7(false); alteraMostrab8(true); }}><strong> Chile </strong> </p>
                        <p onClick={ ()=> {alterab7(1);alteraMostrab7(false); alteraMostrab8(true); }}><strong> Holanda </strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab7(0);alteraMostrab7(false); alteraMostrab8(true); }}><strong> França </strong> </p>
                        <p onClick={ ()=> {alterab7(0);alteraMostrab7(false); alteraMostrab8(true); }}><strong> País de Gales </strong></p>

                    </div>

                </div>
            }  

            {
                mostrab8 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab8(0);alteraMostrab8(false); alteraMostrab9(true); }}><strong> Argentina </strong> </p>
                        <p onClick={ ()=> {alterab8(0);alteraMostrab8(false); alteraMostrab9(true); }}><strong> irã </strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab8(0);alteraMostrab8(false); alteraMostrab9(true); }}><strong> Paraguai </strong> </p>
                        <p onClick={ ()=> {alterab8(1);alteraMostrab8(false); alteraMostrab9(true); }}><strong> Uruguai </strong></p>

                    </div>

                </div>
            }  

            {
                mostrab9 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/125px-Flag_of_Israel.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab9(0);alteraMostrab9(false); alteraMostrab10(true); }}><strong> Líbano </strong> </p>
                        <p onClick={ ()=> {alterab9(1);alteraMostrab9(false); alteraMostrab10(true); }}><strong> Israel </strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab9(0);alteraMostrab9(false); alteraMostrab10(true); }}><strong> Síria </strong> </p>
                        <p onClick={ ()=> {alterab9(0);alteraMostrab9(false); alteraMostrab10(true); }}><strong> Iraque </strong></p>

                    </div>

                </div>
            }  

            {
                mostrab10 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/125px-Flag_of_the_Falkland_Islands.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {;alteraMostrab10(false); alteraMostraResposta(true); somaPontos(0) }}><strong> Ilhas cook </strong> </p>
                        <p onClick={ ()=> {;alteraMostrab10(false); alteraMostraResposta(true); somaPontos(0) }}><strong> Ilhas Salomão  </strong></p>

                    </div>

                    <div className="divisao">
                        <p onClick={ ()=> {;alteraMostrab10(false); alteraMostraResposta(true); somaPontos(1) }}><strong> Ilhas Malvinas </strong> </p>
                        <p onClick={ ()=> {;alteraMostrab10(false); alteraMostraResposta(true); somaPontos(0) }}><strong> Ilhas Faroé </strong></p>

                    </div>

                </div>
            }  

            {
                mostraResposta == true && 
                <div>

                    <p className="resposta"> Você acertou {TotalPontos} de 10!</p>

                </div>
            }

                
                
            
            

        </div>
     );
}

export default Quizbandeiras;