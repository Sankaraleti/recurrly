import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  //to figure out id
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Details</Text>
      <Link href="..">GO back</Link>
    </View>
  );
};

export default SubscriptionDetails;
