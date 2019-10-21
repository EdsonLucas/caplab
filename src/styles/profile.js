import styled from 'styled-components';

import colors from './global/colors';

import arrowSelect from '../images/arrow-select.png';

export const Container = styled.div`
  background: ${props => props.background};
  margin: ${props => props.margin};

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 1150px;
  padding: 0.6rem 0;

  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 140px;
  height: 40px;
  cursor: pointer;
`;

export const SearchContent = styled.div`
  background: ${colors.input};
  border-radius: 30px;
  margin-left: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${colors.icon_input};
    margin-left: 15px;
  }
`;

export const Search = styled.input`
  width: 300px;
  background: transparent;
  box-shadow: none;
  -webkit-box-shadow: none;
  border: none;
  padding: 15px;
`;

export const Menu = styled.div`
  margin-left: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;

    & + a {
      margin-left: 20px;
    }

    img {
      width: 24px;
      height: 24px;
      color: ${colors.title};
      margin-right: 10px;
    }

    p {
      font-size: 13px;
      padding: 18px 0;
    }
  }
`;

export const User = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: 20px;
`;

export const Content = styled.div`
  width: 1150px;
  padding: 2rem 0 5.5rem;

  display: flex;
  flex: 1;
  align-items: center;

  img {
    width: 35px;
    margin-right: 20px;
  }

  h1 {
    color: ${colors.white};
    text-align: left;
  }
`;

export const Card = styled.div`
  width: 1150px;
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0 3px 0 0 ${colors.white_shadow};
  -webkit-box-shadow: 0 3px 0 0 ${colors.white_shadow};
  margin-top: ${props => props.marginTop || `20px`};

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const TabContainer = styled.div`
  width: 100%;
  box-shadow: 0 1px 2px ${colors.dark_shadow};
  -webkit-box-shadow: 0 1px 2px ${colors.dark_shadow};
  padding: 20px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      color: ${props => props.color};
      margin-right: ${props => props.marginRight};
    }

    p {
      color: ${colors.orange_default};

      a {
        color: ${colors.orange_default};
        text-decoration: underline;
      }
    }
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const AvatarContainer = styled.div`
  width: 30%;
  margin: 30px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 14px;

    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    svg {
      color: ${colors.icon_input};
      margin-left: 5px;
    }

    h3 {
      font-weight: 400;
      color: ${colors.blue_default};
    }

    h4 {
      color: ${colors.title};
      font-weight: 300;
    }
  }

  p {
    color: ${colors.text};
  }

  span {
    color: ${colors.text2};
  }
`;

export const Avatar = styled.img`
  width: 188px;
  height: 188px;
  margin-bottom: 20px;
`;

export const Progress = styled.div`
  width: 100%;
  height: 6px;
  background: ${colors.input};
  border-radius: 10px;

  div {
    width: 30%;
    height: 6px;
    background: ${colors.orange_default};
    border-radius: 10px;
    margin: 0;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const Row = styled.div`
  margin: 30px 0px;

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;

  p {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: ${colors.blue_default};
    margin-bottom: 8px;
  }

  select {
    background: transparent;
    border: none;
    border-bottom: 2px solid ${colors.border_bottom};
    appearance: none;
    -webkit-appearance: none;
    background: url(${arrowSelect});
    background-repeat: no-repeat;
    background-position: 98% 0px;
    padding-bottom: 4px;

    font-size: 15px;
    color: ${colors.title};
    font-weight: 400;
  }
`;

export const Column = styled.div`
  width: ${props => props.width};
  margin: 0 40px;

  display: flex;
  flex: ${props => props.flex || 1};
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;

    p {
      margin-right: 5px;
    }

    svg {
      color: ${colors.icon_input};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${colors.border_bottom};
  padding-bottom: 4px;
  background: ${props => props.background};
  background-repeat: no-repeat;
  background-position: 98% 0px;
  margin-left: ${props => props.marginLeft};

  font-size: 15px;
  color: ${colors.title};
  font-weight: 400;
`;

export const CardFooter = styled.div`
  padding: 20px 40px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  button {
    width: 20%;
    background: ${colors.blue_default};
    padding: 8px;
    border: none;
    border-radius: 20px;

    font-size: 16px;
    font-weight: 400;
    color: ${colors.white};

    &:hover {
      background: ${colors.button_hover};
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 400;
    color: ${colors.blue_default};
    border-color: transparent;
    border-radius: 60px;
    padding: 10px 17px;
    margin-left: -17px;

    &:hover {
      background: ${colors.input};
    }
  }
`;

export const Footer = styled.div`
  width: 1150px;
  padding: 0.8rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${colors.title2};
  }

  div {
    display: flex;
    flex-direction: row;

    a {
      color: ${colors.blue_default};

      & + a {
        margin-left: 20px;
      }
    }

    p {
      margin: 0 20px;

      &:hover {
      }
    }
  }
`;
