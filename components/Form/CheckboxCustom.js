import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CheckboxCustom = ({
  options,
  onChange,
  selectedValues = [],
  dynamic = false,
}) => {
  const [selected, setSelected] = useState(selectedValues);

  const handlePress = (value) => {
    let updatedSelected;
    if (selected.includes(value)) {
      updatedSelected = selected.filter(
        (selectedValue) => selectedValue !== value
      );
    } else {
      updatedSelected = [...selected, value];
    }
    setSelected(updatedSelected);
    onChange(updatedSelected);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.checkboxContainer}
          onPress={() => handlePress(option.value)}
          disabled={!dynamic}
        >
          <View style={styles.box}>
            {selected.includes(option.value) && (
              <View style={styles.innerBox} />
            )}
          </View>
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  innerBox: {
    height: 10,
    width: 10,
    backgroundColor: "#007bff",
  },
  label: {
    fontSize: 16,
  },
});

export default CheckboxCustom;
