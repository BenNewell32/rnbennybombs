import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  PixelRatio,
  StyleSheet,
  View,
  Button,
  Text,
} from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const FocusList = (props: any) => {
  const { description, url, subtitle, thumb, title, id, coach, category, raiting } =
    props;

  let urlImg:any = thumb

  return (
    <View>
      <View style={styles.content}>
        <View style={styles.contentImage}>
        <Image
        resizeMode="cover"
          // source={require('@/assets/images/react-logo.png')}
          source={{uri: urlImg, width: 100, height: 65}}
          style={styles.contentImages}
        />
        </View>
        <View style={styles.contentDetails}>
          <ThemedText style={styles.contentTitle} type="subtitle">
            {" "}
            {"("}
            {id}
            {") "}
            {title}
          </ThemedText>
          <View style={styles.contentRow}>
            <Text style={styles.contentSubTitle}>
              {coach}
              {" | "}
            </Text>
            <Text style={styles.contentSubTitle}>{category}</Text>
          </View>
          <View style={styles.contentIconRow}>
            <Text style={styles.contentRaiting}>{raiting}</Text>
            {Number(raiting)>.7?
            <Ionicons key={1} name="rocket" size={15} color="red" />:
            <Ionicons key={1} name="rocket" size={15} color="gray" />
            }
            {Number(raiting)>1.7?
            <Ionicons key={1} name="rocket" size={15} color="red" />:
            <Ionicons key={1} name="rocket" size={15} color="gray" />
            }
            {Number(raiting)>2.7?
            <Ionicons key={1} name="rocket" size={15} color="red" />:
            <Ionicons key={1} name="rocket" size={15} color="gray" />
            }
            {Number(raiting)>3.7?
            <Ionicons key={1} name="rocket" size={15} color="red" />:
            <Ionicons key={1} name="rocket" size={15} color="gray" />
            }
           {Number(raiting)>4.7?
            <Ionicons key={1} name="rocket" size={15} color="red" />:
            <Ionicons key={1} name="rocket" size={15} color="gray" />
            }
          </View>
        </View>
        <View style={styles.contentStatus}>
          <View style={styles.contentRow}>
             <Ionicons style={styles.contentStatusIcons} name="eye" size={30} color="black" />
             
             <Ionicons style={styles.contentStatusIcons} name="checkmark-circle" size={30} color="green" />

             </View>
        </View>
      </View>
      {/* <View style={styles.contentDescription}>
        <Collapsible title="More Info">
          <Text>{description}</Text>
        </Collapsible>
      </View> */}
    </View>
    // <View>
    //   <View style={styles.contentTitle}>
    //     <View style={styles.contentContainer}>
    //       <ThemedText type="subtitle">{id}{": "}
    //       {title}</ThemedText>
    //        <View style={styles.contentTitle}>

    //       <Text>{category} - </Text>
    //       <Text>{subtitle}</Text>
    //       </View>
    //       <View style={styles.contentCoach}>
    //         <Text>By: {coach}</Text>
    //       </View>
    //     </View>
    //     <View style={styles.contentImage}>
    //       {/* <Image
    //         source={require("@/assets/images/react-logo.png")}
    //         style={{ alignSelf: "center" }}
    //       /> */}
    //                   <Ionicons name="play-circle" size={50} color="black" />
    //                   {/* <Ionicons name="refresh-circle" size={50} color="gray" /> */}

    //     </View>
    //   </View>
    //   <View style={styles.contentIcons}>
    //     <View style={styles.contentIconCol}>
    //       <View style={styles.contentIconRow}>
    //         <Text>Focus</Text>
    //       </View>
    //       <View style={styles.contentIconRow}>
    //         <Ionicons name="eye" size={30} color="black" />
    //         <Ionicons name="eye-off-outline" size={30} color="gray" />
    //       </View>
    //     </View>
    //     <View style={styles.verticleLine}></View>

    //     <View style={styles.contentIconCol}>
    //       <View style={styles.contentIconRow}>
    //         <Text>Raiting</Text>
    //       </View>
    //       <View style={styles.contentIconRow}>
    //         <Ionicons key={1} name="rocket" size={23} color="red" />
    //         <Ionicons key={2} name="rocket" size={23} color="red" />
    //         <Ionicons key={3} name="rocket" size={23} color="red" />
    //         <Ionicons key={4} name="rocket" size={23} color="red" />
    //         <Ionicons key={5} name="rocket" size={23} color="gray" />
    //       </View>
    //     </View>

    //     <View style={styles.verticleLine}></View>

    //     <View style={styles.contentIconCol}>
    //       <View style={styles.contentIconRow}>
    //         <Text>Done</Text>
    //       </View>
    //       <View style={styles.contentIconRow}>
    //         {/* <Ionicons name="pause-circle" size={30} color="gray" /> */}
    //         {/* <Ionicons name="pause-circle" size={30} color="orange" /> */}
    //         <Ionicons name="checkmark-circle" size={30} color="green" />
    //       </View>
    //     </View>
    //   </View>
    //   <View style={styles.contentDropdown}>
    //     <Collapsible title="Description">
    //       <Text>{description}</Text>
    //     </Collapsible>
    //   </View>
    //   <View style={styles.contentDivide} />
    // </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    width: "100%",
  },
  contentDescription: {
    flexDirection: "row",
    width: "100%",
    fontSize: 10
  },
  contentImage: {
    flexDirection: "column",
    width: "20%",
    borderColor: "white",
    borderWidth: 2,
  },
  contentImages: {
    width: "100%",
  },
  contentDetails: {
    flexDirection: "column",
    width: "60%",
    paddingLeft: 10,
  },

  contentContainer: {
    flexDirection: "column",
    width: "80%",
  },
  contentHeader: {
    flexDirection: "row",
    flex: 1,
  },
  contentCoach: {
    flexDirection: "column",
    flex: 1,
  },
  contentTitle: {
    fontSize: 14,
  },
  contentSubTitle: {
    fontSize: 10,
  },
  contentRow: {
    flexDirection: "row",
  },
  contentStatusIcons:{
    padding: 5
  },
  contentIconRow: {
    flexDirection: "row",
  },
  contentRaiting: {
    fontSize: 10,
    padding: 3,
    color: "red"
  },
  contentStatus: {
    flexDirection: "column",
    verticalAlign: "middle",
    width: "20%",
    flexBasis: "auto",
    flexGrow: 0,
  },

  contentDropdown: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  contentIcons: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentIconCol: {
    flexDirection: "column",
  },

  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
  contentDivide: {
    backgroundColor: "black",
    height: 2,
  },
  verticleLine: {
    height: "70%",
    width: 1,
    backgroundColor: "#909090",
    verticalAlign: "middle",
    margin: 5,
  },
});
