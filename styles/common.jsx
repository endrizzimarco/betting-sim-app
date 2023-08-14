import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  card: {
    padding: 5,
  },
  divider: {
    marginTop: 7,
    marginBottom: 15,
  },
  input: {
    marginTop: -2,
    maxWidth: 100,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  subtitle: {
    paddingTop: 30,
  },
});

export default styles;
