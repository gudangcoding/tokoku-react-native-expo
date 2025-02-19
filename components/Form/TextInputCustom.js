import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TextInputCustom = ({
  type = "text",
  multiline = false,
  password = false,
  disabled = false,
  icon,
  ...props
}) => {
  const inputType = password ? "password" : type;

  return (
    <View style={styles.container}>
      {icon && <View>{icon}</View>}
      <TextInput
        style={styles.input}
        multiline={multiline}
        secureTextEntry={password}
        editable={!disabled}
        keyboardType={inputType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
});

export default TextInputCustom;
