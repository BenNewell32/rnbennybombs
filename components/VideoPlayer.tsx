import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { PixelRatio, StyleSheet, View, Button, Text} from "react-native";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const VideoPlayer = (props: any) => {
  const { description, url, subtitle, thumb, title, id } = props;

  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useVideoPlayer(url, (player) => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener("playingChange", (isPlaying) => {
      setIsPlaying(isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    <View style={styles.contentContainer}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        startsPictureInPictureAutomatically

      />
      {/* <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
            setIsPlaying(!isPlaying);
          }}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: '100%',
    height: 250,
  },
  // controlsContainer: {
  //   padding: 10,
  // },
});
