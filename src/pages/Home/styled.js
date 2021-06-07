import styled from "styled-components/native";
import logo from "../../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Conteudo = styled.View`
  padding: 2px;
  justify-content: center;
  /* background-color: #f5f5f5; */
  /* background-color: #000; */
  height: 100%;
`;
export const Header = styled.View`
  /* flex: 1; */
  padding: 10px;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  width: 100%;
  /* background-color: #999; */
`;
export const BarBusca = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  /* background-color: #000; */
`;
export const ContainerLogo = styled.View`
  align-self: center;
`;

export const Titulo = styled.Text`
  font-size: 24px;
  color: #707070;
`;

export const ContainerItem = styled.View`
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  /* background: #81368b; */
`;

// export const Titulo = styled.Text`
//   color: #424344;
//   font-size: 33px;
//   align-self: center;
// `
// export const Subtitulo = styled(Titulo)`
//   font-size: 18px;
//   align-self: center;
//   margin-bottom: 2%;
// `
// export const TextoBotaoEntrar = styled.Text`
//   color: #fff;
//   width: 100%;
//   text-align: center;
// `
// export const BotaoEntrar = styled.TouchableOpacity`
//   background: #81368b;
//   padding: 15px;
//   border-radius: 5px;
//   width: 100%;
// `
// export const BotaoEsqueceuSenha = styled.TouchableOpacity``
// export const TextoBotaoEsqueceuSenha = styled.Text`
//   text-align: center;
//   color: #81368b;
// `

// export const Input = styled(InputUnform)`
//   padding: 15px;
// `
// export const ContainerRedeSocial = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: center;
// `
// export const ItemRedeSocial = styled.TouchableHighlight`
//   padding: 5px;
//   height: 40px;
// `
// export const TextoInformacao = styled.Text`
//   color: #81368b;
//   text-align: center;
//   margin: 2% 0px 2% 0px;
// `
// export const ContainerInput = styled.View`
//   flex-direction: row;
//   background: #fff;
//   padding: 15px;
//   border-radius: 5px;
//   justify-content: flex-start;
//   align-items: center;
//   margin-bottom: 5%;
// `
// export const ContainerInputSenha = styled(ContainerInput)`
//   justify-content: space-between;
// `
export const Logo = styled.Image.attrs({
  source: logo,
})`
  align-self: center;
  width: ${wp("32%")}px;
  height: ${hp("7%")}px;
`;
// export const EnvelopeIcon = styled(MaterialIcons).attrs({
//   name: 'mail-outline'
// })`
//   color: #81368b;
//   font-size: 20px;
// `
// export const LockIcon = styled(MaterialIcons).attrs({
//   name: 'lock-outline'
// })`
//   color: #81368b;
//   font-size: 20px;
// `
// export const SenhaVisivelIcon = styled(MaterialIcons).attrs(props => ({
//   name: props.senhaVisivel ? 'visibility' : 'visibility-off'
// }))`
//   color: #81368b;
//   font-size: 20px;
// `
