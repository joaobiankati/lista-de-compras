import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

interface Props {
    name: string;
    finalized: boolean;
    onRemove: () => void;
    onToggle: () => void;
}

export function Product({name, finalized = false, onRemove, onToggle} : Props) {
    return (
        <View style={[styles.container, finalized && styles.containerChecked]}>
            <TouchableOpacity onPress={onToggle} style={styles.checkButton} activeOpacity={0.1}>
                {finalized ? (
                    <Image
                        source={require("../../assets/checkButtonPurple.png")}
                        style={styles.checkButtonPurple}
                    />
                ) : (
                    
                    <Image
                        source={require("../../assets/check")}
                        style={styles.checkButton}
                    />
                )}


            </TouchableOpacity>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 12,
        display: "flex",
        gap: 8,
        alignSelf: "stretch",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#F2F2F2",
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: {height: 2, width: 0},
        justifyContent: "space-between",
        borderColor: "#808080",
    },

    containerChecked: {
        flex: 1,
        flexDirection: "row",
        padding: 12,
        display: "flex",
        gap: 8,
        alignSelf: "stretch",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#F2F2F2",
        justifyContent: "space-between",
        height: 56,
        borderColor: "#D9D9D9",
    },

    checkButton: {
        display: "flex",
        width: 24,
        height: 24,
        padding: 3.273,
        justifyContent: "center",
        alignItems: "center"
    },

    checkButtonPurple: {
        display: "flex",
        padding: 12,
        alignItems: "center",
        gap: 8,
        alignSelf: "stretch",
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#F2F2F2"
    }


})