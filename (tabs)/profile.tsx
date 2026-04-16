import { useRouter } from "expo-router";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const router = useRouter();

    function onSairPress() {
        router.push("/login");
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image 
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/161538925?v=4"
                    }}
                    style={styles.profileImage}
                />

                <Text style={styles.textName}>João Cintra</Text>

                <Text style={styles.textBio}>
                    Talvez
                </Text>

                <TouchableOpacity 
                    style={styles.botaoSair}
                    onPress={onSairPress}
                >
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    botaoSair: {
        marginTop: 20,
        backgroundColor: "#f9262d",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center"
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10
    },
    card: {
        backgroundColor: "#ffffffed",
        padding: 30,
        borderRadius: 15,
        alignItems: "center",

        //Sombras
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,

        width: "100%",
        maxWidth: 250
    },
    textName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 10
    },
    textBio: {
        fontSize: 16,
        textAlign: "center",
        color: "#000000",
        lineHeight: 22
    }
});