import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    top: 0,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: 0,
    marginTop: 6,
    padding: 0,
  },
  logoAndNavigateContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  back: {
    width: "100%",
  },
  backIcon: {
    marginTop: 4,
  },
  logoImage: {
    flex: 1,
    width: "100%",
    height: 80,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
  },
  text: {

    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
