import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.small,
    marginTop: 60,
    shadowColor: COLORS.gray2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    height: 66,
    width: 312,
    alignItems: 'center',
    justifyContent: 'center', 
    marginLeft: 52,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    textAlign: "center",
  },
  
});

export default styles;
