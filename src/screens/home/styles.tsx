import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 1,
        backgroundColor: "#7A4A9E",
        alignItems: "center",
        justifyContent: "center",
        
    },
    bottom: {
        height: 679,
        backgroundColor: "#EFFFFF",

    },
    title: {
        color: "#F2F2F2",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 140,
        
    },
    form : {
        width: "100%",
        top: "21%",
        position: "absolute",
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: "row"
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16, 
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 5,
        borderRadius: 5,
        width: 289,
        borderWidth: 0.5,
    
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: "#31C667",
        borderRadius: 6,
        padding: 18,
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
    }
    
})