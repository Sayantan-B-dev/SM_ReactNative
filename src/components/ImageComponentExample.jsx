
import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const ImageComponentExample = () => {
  const localImage = require('../assets/images/girl.jpeg'); // 📸 Local image (make sure the path is correct)
  const remoteImage = {
    uri: 'https://images.unsplash.com/photo-1708034677699-6f39d9c59f6e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }; // 🌐 Remote image (network URL)
  const backgroundImage = {
    uri: 'https://cdn.pixabay.com/photo/2023/10/07/23/39/girl-8301168_1280.png',
  }; // 🎨 Background image for ImageBackground

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={styles.backgroundInnerImage}
        blurRadius={2} // optional blur effect
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>📷 Image Background Example</Text>

          <Image
            source={localImage}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.imageLabel}>Local Image</Text>

          <Image
            source={remoteImage}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.imageLabel}>Remote Image</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // fallback color while loading background
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundInnerImage: {
    opacity: 0.9,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent dark overlay
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
  },
  imageLabel: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
  },
});

export default ImageComponentExample;
