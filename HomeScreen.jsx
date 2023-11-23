function HomeScreen({ navigation }) {
  // ...

  return (
    {/* ... */}
    <Button
      title="Go to About"
      onPress={() => navigation.navigate('About')}
    />
    {/* ... */}
  );
}
