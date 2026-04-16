import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label: string
    
}
export function Button({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={style.container} {...rest}>
            <Text style={style.label}>{label}</Text>
        </TouchableOpacity>
    )
}    

const style = StyleSheet.create({
    container: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    


    },
    label: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 14,

    }


    })

      