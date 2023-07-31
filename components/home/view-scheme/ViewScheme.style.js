import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 60, 
  },
  text: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: COLORS.black,
    textAlign: "left",
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
    paddingBottom: 10, 
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    backgroundColor: COLORS.white, 
    borderTopWidth: 1, 
    borderTopColor: COLORS.gray2, 
  },
  paginationButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
  },
  paginationButtonText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  pageText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
