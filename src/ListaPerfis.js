import React from "react";
import "./ListaPerfis-css.css"

export default function ListaPerfis() {

    return (

        <div className="alinhado">

            {/* DIVS AREA
            a imagem de perfil será usada como icon, quando se clica mostra todas as informações da pessoa,
            o perfil da pessoa deve apresentar: 
                                                . nome 
                                                . data de nascimento
                                                . morada
                                                . email
                                                . contacto/telemóvel.
            */}

            {/* os perfis serão mostrados com base ao Power Up a que pertencem(turma),
            exenplo:
                        turma 1: Daniel, Ayrton, ... 
                        turma 2: Ariane, Miguel, ... 
                        turma 3: Fernando, Rafa, ... 
            */}

            {/* caso existam muitos perfis e que não consigam aparecer ao todos ao mesmo tempo na página:

                    . botão navegador, para se conseguir andar para a direita e visualizar os resantes perfis 
                    . cada turma tem a capacidade máxima de 30 alunos, mas não é obrigatório estar cheia
                        ! tem de se contar quantos alunos tem a turma com a ajuda de um CONTADOR
                    . existe um limite de 3 turmas
            */}

            {/* div do primeiro power up */}

            <div>
                <img></img>
            </div>

            {/* div do segundo power up */}
            <div>
                <img></img>
            </div>

            {/* div do terceiro power up */}
            <div>
                <img></img>
            </div>

        </div>

    )

}