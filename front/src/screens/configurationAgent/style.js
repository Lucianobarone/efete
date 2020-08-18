import { StyleSheet } from "react-native";
import { inputDark, headerColor } from "../../Common/constans";


export const style = StyleSheet.create({
  titulo: {
    fontSize: 64,
    color: "#6F76E4",
    textAlign: "center",
    fontFamily: "nunito-bold",
    marginTop: 50,
  },
  iniciarSesion: {
    fontSize: 24,
    color: "#6F76E4",
    textAlign: "center",
    fontFamily: "nunito",
    marginTop: 50,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    height: 130,
    marginTop: 30,
    /*  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18, */
    elevation: 7,
  },
  inputContainerDark: {
    backgroundColor: inputDark,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    height: 130,
    marginTop: 30,
    /*  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18, */
    elevation: 7,
  },
  botonRegister: {
    backgroundColor: "#F1F3F6",
    width: 167,
    height: 48,
  },
  botonRegisterDark: {
    backgroundColor: "black",
    width: 167,
    height: 48,
  },
  tituloRegister: {
    color: "#404CB3",
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  tituloRegisterDark: {
    color: headerColor,
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "100%",
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
    fontWeight: "normal",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  searchSectionDark: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: inputDark,
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    fontSize: 18,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  inputDark: {
    fontSize: 18,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: inputDark,
    color: 'white',
  },
  container: {
    flex: 1,
  },
  eyeLock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 15,
  },
  eyeLockDark: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: inputDark,
    borderRadius: 10,
    marginRight: 15,
  },
  alerta: {
    marginTop: 5,
    fontSize: 15,
    color: "#DDDDDD",
    fontStyle: "italic",
    fontWeight: "bold",
    paddingLeft: 10,
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
  borderDark: {
    backgroundColor: inputDark,
    width: 150,
    margin: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    height: 37,
    justifyContent: "center",
  },
});