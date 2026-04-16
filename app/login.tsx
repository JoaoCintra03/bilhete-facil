import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();

    const [secureText, setSecureText] = useState(true);

    function trocarEstadoSenha() {
        if (secureText === true) {
            setSecureText(false);
        }else {
            setSecureText(true);
        }
    }

    function logar() {
        router.replace("/(tabs)/home")
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Ionicons 
                    name="apps-outline" 
                    size={64} 
                    color={"#ffffff"}
                    style={styles.logo} 
                />
                <Text style={styles.title}>Acesse sua conta</Text>

                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="email@example.com"
                    placeholderTextColor="#000000"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput 
                        style={styles.passwordInput}
                        placeholder="*********"
                         placeholderTextColor="#000000"
                        secureTextEntry={secureText} 
                    />
                    <TouchableOpacity 
                        onPress={trocarEstadoSenha}
                        style={styles.iconContainer}
                    >
                        <Ionicons
                            name={secureText ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color={"#ef0a0ae2"}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={logar}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    logo: {
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 30 
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 5,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#000000",
        backgroundColor: "#ffffff",
        marginBottom: 15
    },
    passwordContainer: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 12,
        backgroundColor: "#ffffff",
        marginBottom: 10,
        overflow: "hidden"
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#000000"
    },
    iconContainer: {
        justifyContent: "center",
        paddingHorizontal: 15
    },
    button: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: "#ffffff"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000"
    }
})