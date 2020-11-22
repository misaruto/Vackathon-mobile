import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    maxHeight: 60,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 40,
    flex: 1,
    alignSelf: "center",
    width: "86%",
    fontSize: 28,
    paddingHorizontal: 26,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  inputLabel: {
    fontWeight: "700",
    fontSize: 26,
  },
  inputError: {},
});

export default styles;
