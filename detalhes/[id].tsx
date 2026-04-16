import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { DADOS_EVENTOS } from "../../mocks/event";

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const evento = DADOS_EVENTOS.find(evento => evento.id === id);

  function comprar() {
        router.replace("/(tabs)/carrinho")
    }

  return (
    <>
      
   <Stack.Screen
  options={{
    title: evento?.titulo,
    headerStyle: { backgroundColor: "#000" },
    headerTintColor: "#fff",

    
  }}

/>

      <View style={styles.container}>
         
        <ScrollView showsVerticalScrollIndicator={false}>
          
          <Image
            source={{ uri: evento?.imagem }}
            style={styles.imagemCapa}
          />

          <View style={styles.infoContainer}>
            
            
            <Text style={styles.dataTexto}>{evento?.data}</Text>

            
            <Text style={styles.tituloTexto}>{evento?.titulo}</Text>

            
            <Text style={styles.localTexto}>{evento?.local}</Text>

            
            <Text style={styles.precoTexto}>{evento?.preco}</Text>

           
            <Text style={styles.sectionTitle}>Sobre o evento</Text>

            <Text style={styles.descricao}>
              Este é um evento incrível para desenvolvedores que querem
              evoluir suas habilidades, fazer networking e aprender com
              profissionais da área. Durante o evento, você terá acesso
              a palestras, workshops e experiências práticas.
            </Text>
          </View>
        </ScrollView>

        
        <TouchableOpacity
           style={styles.botao}
           onPress={comprar}
                       >
          
          <Text style={styles.botaoTexto}>Garantir Ingresso</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imagemCapa: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
  },
  dataTexto: {
    color: "#e13f45",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  tituloTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  localTexto: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 15,
  },
  precoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 22,
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