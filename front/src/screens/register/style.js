import { StyleSheet } from "react-native";
import {violetaOscuro} from '../../Common/constans'
export const style = StyleSheet.create({
  inp: {
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    margin: 5,
  },
  register: {
    textAlign: "center",
    color: "blue",
    fontSize: 20,
    margin: 20,
  },

  titulo: {
    fontSize: 64,
    color: "#6F76E4",
    textAlign: "center",
    fontFamily: "nunito-bold",
    marginTop: '10%',
  },
  registrarse: {
    fontSize: 24,
    color: "#6F76E4",
    textAlign: "center",
    marginTop: '10%',
    fontFamily: "nunito",
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginLeft: 15,
    marginRight: 15,
    height: "50%",
    
    marginTop: 30,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 5,
  },

  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: 370,
  },
  botonIniciar: {
    backgroundColor: "#5352EC",
    width: 167,
    height: 48,
  },
  tituloIniciar: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  botonRegister: {
    backgroundColor: "#F1F3F6",
    width: 167,
    height: 48,
  },
  tituloRegister: {
    color: violetaOscuro,
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    fontSize: 18,
    borderRadius: 20,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 0,
    marginBottom: '3%',
    backgroundColor: "#fff",
    color: "#424242",
  },
  container: {
    flex: 1,
  },
  border: {
    backgroundColor: "#FFFFFF",
    width: 150,
    margin: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    height: 37,
    justifyContent: "center",
  },
  alerta: {
    alignSelf: 'center',
    fontSize: 15,
    color: "#FF7575",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: '2%'
  },
  
});
