import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, GestureResponderEvent } from "react-native";
import { DADOS_EVENTOS } from "../../mocks/event";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Carrinho() {

 
  const itensCarrinho = DADOS_EVENTOS.slice(0,4);

  const total = itensCarrinho.reduce((acc, item) => {
  const numero = parseFloat(
    item.preco
      .replace("R$", "")
      .replace(",", ".")
  );


  if (isNaN(numero)) return acc;

  return acc + numero;
}, 0);
  function listar() {
        router.replace("/(tabs)/bilhete")
    }

  return (
    <View style={styles.container}>

      
      <Text style={styles.header}>
        Meu Carrinho ({itensCarrinho.length} itens)
      </Text>

     
      <FlatList
        data={itensCarrinho}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image source={{ uri: item.imagem }} style={styles.imagem} />

            <View style={styles.info}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.texto}>{item.data}</Text>
              <Text style={styles.texto}>{item.local}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
             
            </View>

            
            <TouchableOpacity>
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>

          </View>
        )}
        contentContainerStyle={{ padding: 20 }}
      />

    
      <Text style={styles.total}>
        Total : R$ {total.toFixed(2)}
      </Text>

      
      <TouchableOpacity style={styles.botao}
           onPress={listar}
                       >
        <Text style={styles.botaoTexto}>Finalizar Compra</Text>
      </TouchableOpacity>

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
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
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
  total: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: "#e13f45",
    padding: 15,
    margin: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
