import React from "react";
import { View, Image, TouchableOpacity, Button, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
// import { Container } from './styles';

const OnBoarding = ({ navigation }) => {
  // const Skip = ({ isLight, skipLabel, ...props }) => (
  //   <TouchableOpacity
  //     title={"Próximo"}
  //     containerViewStyle={{
  //       marginVertical: 20,
  //       width: 70,
  //     }}
  //     {...props}
  //   >
  //     <Text>Pular</Text>
  //   </TouchableOpacity>
  // );
  const Skip = () => (
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text style={{ marginHorizontal: 10 }}>Pular</Text>
    </TouchableOpacity>
  );
  const Next = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={{ marginHorizontal: 10 }}>Próximo</Text>
    </TouchableOpacity>
  );
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/onboarding-img1.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#e9dfd4",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnBoarding;
