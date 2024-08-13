import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, Image } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { VideoPlayer } from "@/components/VideoPlayer";
import { FocusList } from "@/components/FocusList";

import Video from "react-native-video";

const videos = [
  {
    description:
    "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film.",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitle: "Strategy",
    
    thumb: "https://thumbs.wbm.im/pw/medium/6433bea3e5df537931901bb7fd4cc257.avif",
    title: "Do I need a rocket serve?",
    id: 1,
    category: "Serving",
    coach: "Benny Bombs 🚀",
    raiting: "4.4"
  },
  {
    description:
      "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    subtitle: "Form",
    thumb: "https://as1.ftcdn.net/v2/jpg/07/31/04/52/1000_F_731045259_6SNBQeOCJtjAMYem5QgC3GPMWQss1Fjk.jpg",
    title: "Big things come in small packages :) ",
    id: 2,
    category: "Overheads",
    coach: "Yana Bear 🐻",
    raiting: "5.0"
  },
  {
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    subtitle: "By Garage419",
    thumb: "https://thumbs.wbm.im/pw/medium/cb9a2451e6bb6f4758622eb6ffce856c.avif",
    title: "Volkswagen GTI Review",
    id: 3,
    category: "Returns",
    coach: "Benny Bombs 🚀",
    raiting: "2.0"

  },
  {
    description:
      "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    subtitle: "By Garage419",
    thumb: "https://thumbs.wbm.im/pw/medium/f66992a6394811082015f87b624a42b5.avif",
    title: "We Are Going On Bullrun",
    id: 4,
    category: "Returning",
    coach: "Yana Bear 🐻",
    raiting: "4.9"

  },
  {
    description:
      "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    subtitle: "By Garage419",
    thumb: "https://thumbs.wbm.im/pw/medium/6433bea3e5df537931901bb7fd4cc257.avif",
    title: "What care can you get for a grand?",
    id: 5,
    category: "Serving",
    coach: "Benny Bombs 🚀",
    raiting: "4.0"

  },
  {
    description:
    "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film.",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitle: "Strategy",
    
    thumb: "https://thumbs.wbm.im/pw/medium/6433bea3e5df537931901bb7fd4cc257.avif",
    title: "Do I need a rocket serve?",
    id: 6,
    category: "Serving",
    coach: "Benny Bombs 🚀",
    raiting: "4.4"
  },
  {
    description:
      "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    subtitle: "Form",
    thumb: "https://as1.ftcdn.net/v2/jpg/07/31/04/52/1000_F_731045259_6SNBQeOCJtjAMYem5QgC3GPMWQss1Fjk.jpg",
    title: "Big things come in small packages :) ",
    id: 7,
    category: "Overheads",
    coach: "Yana Bear 🐻",
    raiting: "5.0"
  },
  {
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    subtitle: "By Garage419",
    thumb: "https://thumbs.wbm.im/pw/medium/cb9a2451e6bb6f4758622eb6ffce856c.avif",
    title: "Volkswagen GTI Review",
    id: 8,
    category: "Returns",
    coach: "Benny Bombs 🚀",
    raiting: "2.0"

  },
  {
    description:
      "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    subtitle: "By Garage419",
    thumb: "https://thumbs.wbm.im/pw/medium/f66992a6394811082015f87b624a42b5.avif",
    title: "We Are Going On Bullrun",
    id: 9,
    category: "Returning",
    coach: "Yana Bear 🐻",
    raiting: "4.9"

  },
  {
    description:
      "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    subtitle: "By Garage419",
    thumb: "https://thumbs.wbm.im/pw/medium/6433bea3e5df537931901bb7fd4cc257.avif",
    title: "What care can you get for a grand?",
    id: 10,
    category: "Serving",
    coach: "Benny Bombs 🚀",
    raiting: "4.0"

  },
];
var videoObj: any = [];

for (let i = 0; i < videos.length; i++) {
  videoObj.push(
    <FocusList
      key={videos[i].id}
      description={videos[i].description}
      url={videos[i].url}
      subtitle={videos[i].subtitle}
      thumb={videos[i].thumb}
      title={videos[i].title}
      id={videos[i].id}
      category={videos[i].category}
      coach={videos[i].coach}
      raiting={videos[i].raiting}
    />
  );
}
export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <VideoPlayer
          description={videos[1].description}
          url={videos[1].url}
          subtitle={videos[1].subtitle}
          thumb={videos[1].thumb}
          title={videos[1].title}
          id={videos[1].id}
          category={videos[1].category}
          coach={videos[1].coach}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        {/* <ThemedText type="title">Focus             <Ionicons name="information-circle-outline" size={25} color="black" />
        </ThemedText> */}
      </ThemedView>
      {/* <ThemedText>
Not everything sticks... this tab is to get you to save favorites to review until you feel comfortable enough to mark it complete!      
</ThemedText> */}
{/* <View style={styles.contentDivide} /> */}

      {videoObj}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",

    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
  },
  contentDivide: {
    backgroundColor: "black",
    height: 2,
  },
});
