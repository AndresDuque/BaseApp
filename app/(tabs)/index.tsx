import {Text, View, StyleSheet, Button} from "react-native";
import {Link, useRouter} from 'expo-router';
import { useEffect, useState } from "react";
import { auth, signIn, logOut } from "../../src/services/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";


export default function Index() {

  const [user, setUser] = useState(null)
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/auth/login"); // Redirect if not logged in
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Checking authentication...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user.email}!</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
      <Button title="Log Out" onPress={async () => {
        await logOut();
        router.replace("/auth/login");
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F14123',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  }
});