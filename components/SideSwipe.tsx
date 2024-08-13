import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { CoachCategories } from "./CoachCategories";

type UserProps = {
  user: any;
};
export default function SideSwipe(props: UserProps) {
  return (
    <View style={styles.container}>
      <Text>{props.user}</Text>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <CoachCategories coach={"Yana Bear"} />
        </View>
        <View style={styles.page} key="2">
          <CoachCategories coach={"Benny Bombs"} />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
