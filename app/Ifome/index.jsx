import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const backgroundImage = { uri: 'https://img.restaurantguru.com/rca2-Restaurante-Du-China-advertisement-2020-08.jpg' };

const imagemSushi = require('../../assets/images/sushi.jpg');
const imagemPoke = require('../../assets/images/po.jpg');
const imagemSashimi = require('../../assets/images/sashimis.jpg');
const imagemBta = require('../../assets/images/baratas.jpg');

const LanchesScreen = ({ adicionarAoCarrinho }) => {
  const lanches = [
    { id: '1', nome: 'Sushi', preco: 90.00, imagem: imagemSushi },
    { id: '2', nome: 'Poke', preco: 70.00, imagem: imagemPoke },
    { id: '3', nome: 'Sashimi', preco: 50.00, imagem: imagemSashimi },
    { id: '4', nome: 'Barata frita', preco: 0.99, imagem: imagemBta },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imagem} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.texto}>{item.nome} - R${item.preco.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={() => adicionarAoCarrinho(item)}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selecione seu lanche</Text>
      <FlatList
        data={lanches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const CarrinhoScreen = ({ carrinho, removerDoCarrinho, voltar, setMensagem }) => {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  };

  const realizarCompra = () => {
    if (carrinho.length === 0) {
      setMensagem('Adicione itens ao carrinho para comprar.');
      return;
    }

    const total = calcularTotal();
    setMensagem(`Compra realizada com sucesso! Total: R$${total.toFixed(2)}`);

    
    removerDoCarrinho(null);
    voltar(); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item.nome} - R${item.preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => removerDoCarrinho(item.id)}>
        <Text style={styles.buttonText}>Remover do Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      {carrinho.length > 0 ? (
        <>
          <FlatList
            data={carrinho}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.buyButton} onPress={realizarCompra}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.empty}>Carrinho vazio.</Text>
      )}
      <TouchableOpacity style={styles.backButton} onPress={voltar}>
        <Text style={styles.backButtonText}>Voltar aos Lanches</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente principal
const App = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [telaAtual, setTelaAtual] = useState('lanches');
  const [mensagem, setMensagem] = useState('');

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    setMensagem('Item adicionado ao carrinho!');
  };

  const removerDoCarrinho = (id) => {
    if (id === null) {
      setCarrinho([]);
    } else {
      setCarrinho(carrinho.filter(item => item.id !== id));
    }
  };

  const voltar = () => {
    setTelaAtual('lanches');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.appContainer}>
        {telaAtual === 'lanches' ? (
          <>
            <LanchesScreen adicionarAoCarrinho={adicionarAoCarrinho} />
            <TouchableOpacity style={styles.cartButton} onPress={() => setTelaAtual('carrinho')}>
              <Text style={styles.cartButtonText}>Carrinho</Text>
            </TouchableOpacity>
          </>
        ) : (
          <CarrinhoScreen
            carrinho={carrinho}
            removerDoCarrinho={removerDoCarrinho}
            voltar={voltar}
            setMensagem={setMensagem}
          />
        )}
        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e7f1ff',
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
    textAlign: 'center',
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    color: '#28a745',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buyButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  cartButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  cartButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;