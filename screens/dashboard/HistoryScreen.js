import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const HistoryScreen = () => {
  const [selectedSegment, setSelectedSegment] = React.useState("diproses");

  const data = [
    { id: 1, status: "diproses", nama: "John Doe", tanggal: "20-02-2022" },
    { id: 2, status: "dikirim", nama: "Jane Doe", tanggal: "21-02-2022" },
    { id: 3, status: "selesai", nama: "Bob Smith", tanggal: "22-02-2022" },
    {
      id: 4,
      status: "bermasalah",
      nama: "Alice Johnson",
      tanggal: "23-02-2022",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.nama} - {item.tanggal}
      </Text>
      <Text style={styles.statusText}>Status: {item.status}</Text>
    </View>
  );

  const segments = ["diproses", "dikirim", "selesai", "bermasalah"];

  return (
    <View style={styles.container}>
      <View style={styles.segmentContainer}>
        {segments.map((segment) => (
          <TouchableOpacity
            key={segment}
            style={[
              styles.segment,
              selectedSegment === segment && styles.selectedSegment,
            ]}
            onPress={() => setSelectedSegment(segment)}
          >
            <Text
              style={[
                styles.segmentText,
                selectedSegment === segment && styles.selectedSegmentText,
              ]}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={data.filter((item) => item.status === selectedSegment)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  segmentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  segment: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  selectedSegment: {
    backgroundColor: "#007BFF",
  },
  segmentText: {
    color: "#333",
  },
  selectedSegmentText: {
    color: "#fff",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 12,
    color: "#666",
  },
});
