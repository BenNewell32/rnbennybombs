import {
  Image,
  ScrollView,
  PixelRatio,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const yana = <Image
resizeMode="cover"
source={{
  uri: "https://iili.io/dA68QLB.png",
  width: 70,
  height: 70,
}}
/>
const ben = <Image
resizeMode="cover"
source={{
  uri: "https://iili.io/dA6v2yv.png",
  width: 70,
  height: 70,
}}
/>
const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const CoachCategories = (props: any) => {
  const { coach } = props;
  return (
    <View style={styles.coachbox}>
      <View style={styles.header}>
        {coach === "Benny Bombs" ? (
          <Image
          resizeMode="cover"
          source={{
            uri: "https://iili.io/dA6v2yv.png",
            width: 200,
            height: 250,
          }}
          />
        ) : (
          <Image
resizeMode="cover"
source={{
  uri: "https://iili.io/dA68QLB.png",
  width: 200,
  height: 200,
}}
/>
        )}
        <Text style={styles.coach}>{coach}</Text>
      </View>
      <View style={styles.grid}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Serving</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Returns</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Drives</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Drops</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Dinks</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Overheads</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Mental Game</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Between Points</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.image}>
            {coach === "Benny Bombs" ? (
          ben
        ) : (
          yana
        )}
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>Strategies</Text>
              <View style={styles.row}>
                <Ionicons name="videocam" size={15} color="gray" />

                <Text> 16 </Text>
                <Ionicons name="timer" size={15} color="gray" />

                <Text>35min</Text>
              </View>
              <Button title="View Lessons"></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coachbox: {
    marginTop: 40,
  },
  header: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  coach: {
    fontSize: 24,
    fontWeight: "900",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: "90%",
    margin: 2,
    flex: 1,
  },
  grid: {
    paddingTop: 70,
    marginTop: -60,
    height: "80%",
    width: 370,
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
  },
  pages: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  page: {
    padding: 15,
  },
  image: {
    flexDirection: "column",
  },
  details: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    flex: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  button: {
    height: 30,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
  },
});
