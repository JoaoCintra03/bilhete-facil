import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#042344",
            tabBarInactiveTintColor: "#8e8e93"
        }}>
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> 
                }} 
            />

            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> 
                }} 
            />
            <Tabs.Screen 
                name="carrinho" 
                options={{ 
                    title: "Carrinho",
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={24} color={color} /> 
                }} 
            />
            <Tabs.Screen 
                name="bilhete" 
                options={{ 
                    title: "Bilhete",
                    tabBarIcon: ({ color }) => <FontAwesome name="ticket" size={24} color={color} /> 
                }} 
            />
            
        </Tabs>
    )
}