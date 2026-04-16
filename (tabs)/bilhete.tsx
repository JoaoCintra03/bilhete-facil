import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { DADOS_EVENTOS } from "../../mocks/event";
import { FontAwesome } from "@expo/vector-icons";

export default function Bilhete() {

  const itensBilhete = DADOS_EVENTOS.slice(0, 5);

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Meus Bilhetes ({itensBilhete.length} bilhetes)
      </Text>

      <FlatList
        data={itensBilhete}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {

          const codigo = `TKT-2026-${item.id.toUpperCase()}`;

          return (
            <View style={styles.card}>

              
              <Image source={{ uri: item.imagem }} style={styles.imagem} />

              
              <View style={styles.info}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.texto}>{item.data}</Text>
                <Text style={styles.texto}>{item.local}</Text>
                <Text style={styles.preco}>{item.preco}</Text>

                
                <View style={styles.linha} />

                
                <View style={styles.codigoBox}>
                  <FontAwesome name="ticket" size={14} color="#e13f45" />

                  <Text style={styles.codigo}>
                    {codigo}
                  </Text>
                </View>

              </View>
            </View>
          );
        }}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    padding: 20,
    marginTop: 50,
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
   
  },

  imagem: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: "cover",
    
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  titulo: {
    color: "#fff",
    fontWeight: "bold",
  },

  texto: {
    color: "#ccc",
    fontSize: 12,
  },

  preco: {
    color: "#e13f45",
    fontWeight: "bold",
    marginTop: 5,
  },

  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    borderStyle: "dashed",
    marginVertical: 8,
  },

  codigoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  codigo: {
    color: "#e13f45",
    fontWeight: "bold",
    fontSize: 12,
  },
});