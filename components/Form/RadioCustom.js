import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioCustom = ({ options, onChange, selectedValue, dynamic = false }) => {
  const [selected, setSelected] = useState(selectedValue);

  const handlePress = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => handlePress(option.value)}
          disabled={!dynamic}
        >
          <View style={styles.outerCircle}>
            {selected === option.value && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#007bff",
  },
  label: {
    fontSize: 16,
  },
});

export default RadioCustom;
