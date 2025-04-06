import { Text, StyleSheet, Platform,ScrollView} from 'react-native';
import React from 'react';

const PlatformExample = () => {
  const isAndroid = Platform.OS === 'android';
  const isIOS = Platform.OS === 'ios';
  const isTV = Platform.isTV;
  const os = Platform.OS;
  const version = Platform.Version;
  const selectedFont = Platform.select({
    ios: 'San Francisco',
    android: 'Roboto',
    default: 'System',
  });

  const selectedPadding = Platform.select({
    ios: '20pt',
    android: '16dp',
    default: 'Standard',
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🧠 Platform Info</Text>

      <Text style={styles.info}>Platform: {os}</Text>
      <Text style={styles.info}>Version: {version}</Text>
      <Text style={styles.info}>
        Is Android? {isAndroid ? '✅ Yes' : '❌ No'}
      </Text>
      <Text style={styles.info}>Is iOS? {isIOS ? '✅ Yes' : '❌ No'}</Text>
      <Text style={styles.info}>Is TV? {isTV ? '📺 Yes' : '📱 No'}</Text>

      <Text style={styles.info}>Font for this OS: {selectedFont}</Text>
      <Text style={styles.info}>Padding style: {selectedPadding}</Text>

      <Text style={styles.subHeading}>🔧 Constants:</Text>
      <Text style={styles.codeBlock}>
        {JSON.stringify(Platform.constants, null, 2)}
      </Text>
    </ScrollView>
  );
};

export default PlatformExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
    //justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#334155',
    marginTop: 30,
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 8,
  },
  codeBlock: {
    backgroundColor: '#E2E8F0',
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    color: '#1E293B',
    fontFamily: Platform.select({
      ios: 'Courier',
      android: 'monospace',
      default: 'System',
    }),
  },
});
