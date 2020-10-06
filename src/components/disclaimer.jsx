import React from 'react'

const Disclaimer = (props) => {
    if (props.short && props.lang ==="en") 
    return (
    <small>
    All the information on this website is published in good faith and for general information purpose only. This website and all its content are protected by international laws, including the <strong>Berne Convention for the Protection of Literary and Artistic Works</strong>, and the <strong>World Intellectual Property  Organization</strong> conventions. You must ask before copying or repoducing our content.
    </small>)

    if (props.short && props.lang ==="pt-br") 
    return (
    <small>
    Todas as informações deste site estão protegidas por leis de proteção intelectual, no âmbito internacional pela <strong>Convenção de Berna para a Proteção de Literatura e Trabalhos Artísticos</strong>, e pelas convenções estabelecidas pela <strong>Organização Mundial de Propriedade Intelectual</strong> e no Brasil, pela <strong>LEI Nº 9.610, DE 19 DE FEVEREIRO DE 1998 "Lei do Direito do Autor"</strong>. Você precisa pedir autorização antes de reproduzir qualquer conteúdo deste site.
    </small>)

    return (<p>Can't find disclaimer.</p>)

}

export default Disclaimer