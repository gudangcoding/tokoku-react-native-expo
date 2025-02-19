import React, { useState } from "react";
import { View, Text, TouchableOpacity, DatePickerAndroid } from "react-native";

const DatePickerCustom = ({ onChange, value }) => {
  const [mode, setMode] = useState("date");

  const handleChange = async () => {
    try {
      const { action, year, month, day, hour, minute } =
        await DatePickerAndroid.open({
          date: value,
          modeAndroid: mode,
        });
      if (action !== DatePickerAndroid.dismissedAction) {
        onChange(new Date(year, month, day, hour, minute));
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleChange}>
        <Text>{value.toLocaleString()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setMode(mode === "date" ? "time" : "date")}
      >
        <Text>{mode === "date" ? "Change to time" : "Change to date"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerCustom;
