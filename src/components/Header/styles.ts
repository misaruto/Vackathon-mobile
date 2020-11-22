import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    maxHeight: 180,
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  logoAndNavigateContainer: {
    minHeight: 80,
    top: 0,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  back: {
    width: "100%",
    justifyContent: "flex-start",
  },
  backIcon: {},
  logoImgContainer: {
    marginTop: 26,
    alignItems: "center",
    alignSelf: "center",
    height: 130,
    flex: 1,
    padding: 0,
  },
  logoImage: {
    position: "relative",
    flex: 1,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
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
