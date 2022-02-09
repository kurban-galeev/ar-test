import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  ViroPolygon,
} from "@viro-community/react-viro";
export const BusinessCard = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [textName, setTextName] = useState("Kirill Glebov");
  return (
    <ViroNode style={styles.container}>
      <ViroARImageMarker
        target={"businessCard"}
        onAnchorFound={() => setRunAnimation(true)}
      >
        <ViroNode key="card">
          <ViroNode
            opacity={0}
            position={[0, -0.03, 0]}
            // useGravity={false}
            animation={{
              name: "animateImage",
              run: runAnimation,
            }}
          >
            <ViroFlexView
              position={[0, 0, 0]}
              rotation={[-90, 0, 0]}
              height={0.05}
              width={0.05}
              onClick={() => setTextName("Kurban Galeev")}
              // style={styles.card}
            >
              <ViroPolygon
                // rotation={[-90, 0, 0]}
                opacity={0.7}
                position={[0, 0, 0]}
                vertices={[
                  [0, 0.05],
                  [0.05, 0.05],
                  [0.05, 0],
                  [0, 0],
                  // [0.05, -0.05],
                ]}
              />

              <ViroImage
                height={0.01}
                width={0.01}
                style={styles.image}
                source={require("./res/avatar.png")}
              />
              <ViroText
                textClipMode="None"
                text={textName}
                // scale={[0.015, 0.015, 0.015]}
                style={styles.textStyle}
              />
            </ViroFlexView>
            {/* </ViroFlexView> */}

            {/* <ViroFlexView
              // dragPlane="FixedToPlane"
              position={[0.01, 0, 0]}
              rotation={[-90, 0, 0]}
              height={0.05}
              width={0.05}
              style={styles.card}
            >
              <ViroFlexView style={styles.cardWrapper} position={[0, 0, 0]}>
                <ViroImage
                  height={0.01}
                  width={0.01}
                  style={styles.image}
                  source={require("./res/avatar.png")}
                />
                <ViroText
                  textClipMode="None"
                  text="Kirill Glebov"
                  scale={[0.015, 0.015, 0.015]}
                  style={styles.textStyle}
                />
              </ViroFlexView>
              <ViroFlexView
                position={[0, 0, 0.02]}
                onTouch={() => setTextName("Kirill")}
                style={styles.subText}
              >
                <ViroText
                  width={0.01}
                  height={0.01}
                  textAlign="left"
                  textClipMode="None"
                  text={textName}
                  scale={[0.01, 0.01, 0.01]}
                  style={styles.textStyle}
                />
                <ViroAnimatedImage
                  height={0.01}
                  width={0.01}
                  loop={true}
                  source={require("./res/tweet.gif")}
                />
              </ViroFlexView>
            </ViroFlexView>
            <ViroNode
              // opacity={0}
              position={[0, 0, 0.028]}
              // animation={{
              //   name: "animateViro",
              //   run: runAnimation,
              // }}
            >
              <ViroText
                text="www.bravedevelopers.com"
                rotation={[-90, 0, 0]}
                scale={[0.01, 0.01, 0.01]}
                style={styles.textStyle}
              />
            </ViroNode> */}
          </ViroNode>
        </ViroNode>
      </ViroARImageMarker>
    </ViroNode>
  );
};
const styles = StyleSheet.create({
  image: {
    marginLeft: 0.02,
  },
  textStyle: {
    flex: 0.5,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#2d9aa6",
    textAlignVertical: "top",
    textAlign: "left",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "column",
    // borderRadius: 0.02,
    backgroundColor: "#d4c9c9",
  },
  cardWrapper: {
    backgroundColor: "#d4c9c9",
    marginLeft: 0.01,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0.001,
    flex: 0.5,
  },
  subText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 0.5,
  },
});
ViroARTrackingTargets.createTargets({
  businessCard: {
    source: require("./res/KG.png"),
    orientation: "Up",
    physicalWidth: 0.05, // real world width in meters
  },
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)",
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)",
  },
});

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0,
    },
    easing: "Bounce",
    duration: 500,
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: "Bounce",
    duration: 500,
  },
});
