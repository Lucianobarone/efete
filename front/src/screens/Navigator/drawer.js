import React, { useState } from "react";
/* cle */
import { headerColor } from "../../Common/constans";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser, mode } from "../../redux/store/actions/users";

const Drawer = createDrawerNavigator();

export default (props) => {
  const [modoDark, setModoDark] = useState(false);

  const cambiarModo = () => {
    setModoDark(!modoDark);
    dispatch(mode(modoDark));
  };

  const modee = useSelector((state) => state.users.mode);

  const userRole = useSelector((state) => state.users.user.role);
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: modee ? "white" : "#151e21" }}
    >
      <View>
        <Text
          onPress={() => props.navigation.closeDrawer()}
          style={style.titulo}
        >
          Efete
        </Text>
      </View>
      <View style={style.hr} />
      <View>
        <DrawerItem
          icon={user}
          labelStyle= {modee ? style.label : style.labelDark}
          label="Mi perfil"
          onPress={() =>
            props.navigation.navigate("Root", { screen: "User" }, props)
          }
        />

        <DrawerItem
          icon={bank}
          labelStyle= {modee ? style.label : style.labelDark}
          label="Mis cuentas"
          onPress={() =>
            props.navigation.navigate("Root", { screen: "Accounts" }, props)
          }
        />

        {userRole === "agent" ? (
          <DrawerItem
            icon={agent}
            labelStyle= {modee ? style.label : style.labelDark}
            label="Perfil agente"
            onPress={() =>
              props.navigation.navigate("Root", { screen: "Agent" }, props)
            }
          />
        ) : (
          <DrawerItem
            icon={agent}
            labelStyle= {modee ? style.label : style.labelDark}
            label="Convertite en Agente"
            onPress={() =>
              props.navigation.navigate(
                "Root",
                { screen: "CreateAgentForm" },
                props
              )
            }
          />
        )}

        <DrawerItem
          icon={info}
          label="Acerca de la App"
          labelStyle={modee ? style.label : style.labelDark}
          onPress={() =>
            props.navigation.navigate("Root", { screen: "ScannerQR" }, props)
          }
        />
        <View style={style.hr} />
        <TouchableOpacity
          onPress={() => {
            cambiarModo();
          }}
        >
          <View style={style.modoOscuro}>
            <Text style={modee ? style.textMode : style.textModeDark}>
              Modo oscuro
            </Text>
            <View pointerEvents="none">
              <Switch value={modoDark} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={style.hr} />

        <DrawerItem
          icon={exit}
          labelStyle={modee ? style.label : style.labelDark}
          label="Cerrar sesion"
          onPress={() => {
            dispatch(logOutUser());
            props.navigation.navigate("Root", { screen: "Login" }, props);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "90%",
    padding: 5,
  },
  titulo: {
    fontSize: 47,
    fontFamily: "nunito-bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    color: headerColor,
  },
  label: {
    fontSize: 16,
    color: "#3B414B",
  },
  labelDark: {
    fontSize: 16,
    color: "white",
  },
  modoOscuro: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingTop: 20,
  },
  textMode: {
    fontSize: 16,
    color: "#3B414B",
    fontWeight: "500",
  },
  textModeDark: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
});

const user = () => <MaterialIcons name="person" size={24} color="#929292" />;
const bank = () => (
  <MaterialCommunityIcons name="bank" size={24} color="#929292" />
);
const agent = () => (
  <MaterialIcons name="person-pin-circle" size={24} color="#929292" />
);
const info = () => <MaterialIcons name="info" size={24} color="#929292" />;
const exit = () => (
  <MaterialIcons name="exit-to-app" size={25} color="#929292" />
);
