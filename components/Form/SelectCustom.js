import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

const SelectCustom = ({
  options = [],
  onChange,
  value,
  placeholder = "Pilih salah satu",
  dynamic = false,
  style,
}) => {
  const [selected, setSelected] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [search, options]);

  const handleSelect = (option) => {
    setSelected(option.value);
    onChange(option.value);
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={handleSearch}
          placeholder="Cari..."
        />
      </View>
      <TouchableOpacity
        style={styles.select}
        onPress={() => dynamic && alert("Coming soon!")}
      >
        <Text style={styles.placeholder}>
          {selected ? selected : placeholder}
        </Text>
      </TouchableOpacity>
      {!dynamic && (
        <FlatList
          data={filteredOptions}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.optionText}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.value}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  select: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
  placeholder: {
    color: "#999",
  },
  options: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  option: {
    padding: 8,
  },
  optionText: {
    fontSize: 16,
  },
  searchContainer: {
    marginBottom: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
});

export default SelectCustom;
