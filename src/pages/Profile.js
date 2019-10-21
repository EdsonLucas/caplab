import React, { Component } from 'react';

import { FaSearch, FaAngleUp, FaAngleDown, FaInfoCircle } from 'react-icons/fa';
import { GoInfo } from 'react-icons/go';

import {
  Container,
  Header,
  Logo,
  SearchContent,
  Search,
  Menu,
  User,
  Content,
  Card,
  TabContainer,
  ContentContainer,
  AvatarContainer,
  Avatar,
  Progress,
  FormContainer,
  Row,
  Column,
  Input,
  CardFooter,
  ButtonContainer,
  Footer,
} from '../styles/profile';

import breadcumb from '../images/bg-header-overview.png';
import lock from '../images/lock.png';
import colors from '../styles/global/colors';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verified: false,
    };
  }

  render() {
    const { verified } = this.state;

    return (
      <>
        <Container background="#ffffff">
          <Header>
            <Logo
              src={require('../images/capitual-brand.svg')}
              alt="Capitual"
            />

            <SearchContent>
              <FaSearch />
              <Search placeholder="Encontrar contato..." />
            </SearchContent>

            <Menu>
              <a>
                <img
                  src={require('../images/icon-wallet-gray.svg')}
                  alt="Carteiras"
                />
                <p>Carteiras</p>
              </a>
              <a>
                <img
                  src={require('../images/icon-payment-gray.svg')}
                  alt="Pagamentos"
                />
                <p>Pagamentos</p>
              </a>
              <a>
                <img
                  src={require('../images/icon-evoucher-gray.svg')}
                  alt="CapCodes"
                />
                <p>CapCodes</p>
              </a>
              <a>
                <img
                  src={require('../images/icon-invoice-gray.svg')}
                  alt="Cobranças"
                />
                <p>Cobranças</p>
              </a>

              <User
                src={require('../images/avatar-default.svg')}
                alt="Foto de perfil"
              />
            </Menu>
          </Header>
        </Container>

        <Container background={`url(${breadcumb}) center center no-repeat;`}>
          <Content>
            <img src={require('../images/user-white.svg')} alt="Minha Conta" />
            <h1>Minha Conta</h1>
          </Content>
        </Container>

        <Container>
          <Card marginTop="-50px">
            <TabContainer>
              <div>
                <img
                  src={require('../images/profile-gray.svg')}
                  alt="Meu perfil"
                />
                <h2>Meu perfil</h2>
              </div>
              <div>
                <GoInfo color={colors.orange_default} marginRight="5px" />
                <p>
                  Sua conta ainda não confirmada. <a>Clique aqui</a> para
                  confirmar agora!
                </p>
              </div>
            </TabContainer>
            <ContentContainer>
              <AvatarContainer>
                <Avatar
                  src={require('../images/avatar-default.svg')}
                  alt="Avatar"
                />

                {verified ? (
                  <>
                    <div>
                      <img
                        src={require('../images/verified.svg')}
                        alt="Verificado"
                      />
                      <h3>Verificado</h3>
                    </div>
                    <p>Membro desde: 29/04/2019</p>
                  </>
                ) : (
                  <Column>
                    <div>
                      <h4>Limite de Transações</h4>
                      <GoInfo />
                    </div>
                    <Progress>
                      <div />
                    </Progress>
                    <span>$2,553.79 / $9,999.00</span>
                  </Column>
                )}

                <span>
                  Id do suporte: <b>CAP-U10119</b>
                </span>
              </AvatarContainer>
              <FormContainer>
                <Row>
                  <Column width="10%" flex="none">
                    <p>Tratamento</p>
                    <select>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss</option>
                      <option>Ms.</option>
                      <option>Sir</option>
                      <option>Ma'am</option>
                      <option>D.</option>
                    </select>
                  </Column>

                  <Column width="38.5%" flex="none">
                    <p>Nome Completo</p>
                    <Input value="Edson Lucas" background={`url(${lock})`} />
                  </Column>

                  <Column>
                    <p>Gênero</p>
                    <select>
                      <option>Masculino</option>
                      <option>Feminino</option>
                    </select>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <p>País</p>
                    <Input />
                  </Column>

                  <Column>
                    <p>Estado</p>
                    <Input />
                  </Column>

                  <Column>
                    <p>Cidade</p>
                    <Input />
                  </Column>
                </Row>
                <Row>
                  <Column width="57.5%" flex="none">
                    <p>Endereço (Rua, número e bairro)</p>
                    <Input />
                  </Column>

                  <Column>
                    <p>Código Postal</p>
                    <Input />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <p>Data de Nascimento</p>
                    <Row style={{ margin: 0 }}>
                      <Input />
                      <Input marginLeft="10px" />
                      <Input marginLeft="10px" />
                    </Row>
                  </Column>

                  <Column>
                    <p>Moeda padrão</p>
                    <select>
                      <option>Bitcoin</option>
                      <option>Dash</option>
                      <option>Litecoin</option>
                      <option>Dollar</option>
                      <option>Euro</option>
                      <option>Real</option>
                    </select>
                  </Column>

                  <Column>
                    <div>
                      <p>Como deseja ser chamado?</p>
                      <GoInfo />
                    </div>
                    <Input />
                  </Column>
                </Row>
              </FormContainer>
            </ContentContainer>
            <CardFooter>
              <ButtonContainer>
                <a>Cotações</a>
                <a>Taxas</a>
                <a>Limites</a>
              </ButtonContainer>

              <button>Salvar</button>
            </CardFooter>
          </Card>
        </Container>

        <Container>
          <Card>
            <TabContainer>
              <div>
                <img
                  src={require('../images/security-gray.svg')}
                  alt="Meu perfil"
                />
                <h2>Segurança</h2>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </TabContainer>
          </Card>
        </Container>

        <Container>
          <Card>
            <TabContainer>
              <div>
                <img
                  src={require('../images/email-gray.svg')}
                  alt="Meu perfil"
                />
                <h2>E-mail</h2>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </TabContainer>
          </Card>
        </Container>

        <Container>
          <Card>
            <TabContainer>
              <div>
                <img
                  src={require('../images/phone-gray.svg')}
                  alt="Meu perfil"
                />
                <h2>Telefone</h2>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </TabContainer>
          </Card>
        </Container>

        <Container background={colors.white} margin="50px 0 0 0">
          <Footer>
            <h3>© 2019 Capitual Ltd.</h3>

            <div>
              <a>Sobre nós</a>
              <p>•</p>
              <a>Para seu negócio</a>
              <p>•</p>
              <a>Desenvolvedores</a>
              <p>•</p>
              <a>Legal</a>
              <p>•</p>
              <a>Suporte</a>
            </div>

            <select>
              <option>Português</option>
              <option>Inglês</option>
            </select>
          </Footer>
        </Container>
      </>
    );
  }
}
