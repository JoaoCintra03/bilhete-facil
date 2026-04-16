import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView,} from "react-native";
import { Button } from "../components/Button";
import { Link } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../../mocks/event";
import { Event } from "../../types/event";
import { FontAwesome } from "@expo/vector-icons";

type RenderizarEventoProps = {
  item: Event;
};

const renderizarEvento = ({ item }: RenderizarEventoProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />

    <View style={styles.infoContainer}>
      <Text style={styles.dataTexto}>{item.data}</Text>
      <Text style={styles.tituloTexto} numberOfLines={2}>
        {item.titulo}
      </Text>
      <Text style={styles.localTexto}>{item.local}</Text>

     <View style={styles.rodapeCard}>
  <Text style={styles.precoTexto}>{item.preco}</Text>

  <View style={styles.botoesContainer}>
    <Button label="Comprar" />

    <Link href={{pathname: "/detalhes/[id]", params: { id: item.id },}}asChild
>

  <TouchableOpacity style={styles.iconButton}>
    <FontAwesome name="bars" size={22} color="black" />
  </TouchableOpacity>
</Link>
  </View>
</View>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Descubra Eventos</Text>
        <TextInput
          style={styles.inputBusca}
          placeholder="Buscar eventos, shows, cursos..."
          placeholderTextColor="#000000"
        />
      </View>


      <FlatList
        data={DADOS_EVENTOS} 
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    padding: 20,
    backgroundColor: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 15,
  },
  inputBusca: {
    backgroundColor: "#F0F2F5",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: "#ffffff",
  },
  listaContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#000000",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemCapa: {
    width: "100%",
    height: 160,
  },
  infoContainer: {
    padding: 15,
  },
  dataTexto: {
    color: "#e13f45",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  tituloTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  localTexto: {
    fontSize: 14,
    color: "#ffffff",
    marginBottom: 15,
  },
  rodapeCard: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    
  },
  botoesContainer: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
},
  precoTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  iconButton: {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
  backgroundColor: "#eee",
},

});
