import { StyleSheet, Text, View } from "react-native";

export function BookshelfScreen() {

  return (
    <View style={styles.container} >
      <Text>Bookshelf</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})