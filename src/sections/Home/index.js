import React from 'react';
import bgSectionHome from '../../assets/bgSectionHome3.png';
import './styles.css';


export default function Home() {

    return (
        <section id="sectionHome" style={{ backgroundImage: `url(${bgSectionHome})` }}>
            <div className="leftSideHome">
                <p>A internet é a porta de entrada para que o mundo, o objetivo é fazer o mundo conhecer o que
                    você faz.</p>

                <p>Sabemos que as vezes o objetivo é menor, fazer apenas a cidade ou poucas pessoas conhecerem,
                    talvez as pessoas certas, e bom, a internet funciona pra isso também :)</p>

                <p>A tecnologia aplicada ao seu trabalho pode ser o diferencial entre você e seu concorrente!</p>
            </div>
            <div className="rightSideHome">
                <form>
                    <div className="formHeaderHome">
                        <h2>Se interessou?</h2>
                        <p>Ótimo! Para te ajudar preciso saber um pouco mais de você, vai ser rápido ;)</p>
                    </div>
                    <div className="formBodyHome">
                        <div className="formItemHome">
                            <label>Com o que você trabalha?</label>
                            <textarea rows="5" placeholder="Apenas um breve resumo do que você faz .."></textarea>
                        </div>

                        <div className="formItemHome">
                            <label>Qual seu interesse na tecnologia para o seu trabalho?</label>
                            <div className="inputGroupHome">
                                <div><input id="homeOpSite" type="checkbox" value="site" /> <label htmlFor="homeOpSite">Ter um site para divulgar meu trabalho</label></div>
                                <div><input id="homeOpEcommerce" type="checkbox" value="ecommerce" /> <label htmlFor="homeOpEcommerce">Uma loja virtual para aumentar minhas
                                    vendas</label></div>
                                <div><input id="homeOpSistema" type="checkbox" value="sistema" /> <label htmlFor="homeOpSistema">Ter um sistema para controlar processos
                                    (vendas, orçamentos, negócios, projetos, etc)</label></div>
                                <div><input id="homeOpApp" type="checkbox" value="aplicativo" /> <label htmlFor="homeOpApp">Ter um aplicativo para atender uma
                                    necessidade especifica do meu negócio</label></div>
                                <div><input id="homeOpFiscal" type="checkbox" value="fiscal" /> <label htmlFor="homeOpFiscal">Atender as responsabilidades fiscais de
                                    forma automatizada</label></div>
                            </div>
                        </div>
                        <div className="formItemHome">
                            <label>Nenhuma das opções satisfaz o que precisa?</label>
                            <textarea rows="5" placeholder="O que poderiamos fazer pra te ajudar?"></textarea>
                        </div>
                    </div>
                    <div className="formItemHome">
                        <button>Enviar Informações</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
