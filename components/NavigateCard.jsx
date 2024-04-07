import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourite from "./NavFavourite";
import { Icon } from "@rneui/themed";
const NavigateCard = () => {
  const dispath = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Fardeen</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: "AIzaSyC8ZPSlmQmGQ3yowTg0bz5agaW302vC0wg",
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispath(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("rideOptions");
            }}
            styles={{
              container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
            }}
          />
        </View>
        <NavFavourite />
      </View>

      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-500">
        <TouchableOpacity
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
          onPress={() => navigation.navigate("rideOptions")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-between  w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
