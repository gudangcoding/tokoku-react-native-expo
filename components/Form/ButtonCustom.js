import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonCustom = ({
  title,
  onPress,
  color = "#007bff",
  size = "md",
  icon,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 5,
      padding: size === "sm" ? 8 : 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#fff",
      fontSize: size === "sm" ? 14 : 16,
      marginLeft: icon ? 8 : 0,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon && <View>{icon}</View>}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
