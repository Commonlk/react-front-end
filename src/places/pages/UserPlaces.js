import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "A big building",
    imageUrl:
      "https://images.adsttc.com/media/images/5bad/284c/f197/cc8d/7400/003a/large_jpg/01_Ancient-Roman-Empire-State-Building.jpg?1538074693",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: "40.7484405",
      lng: "-73.9878531",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "A big building",
    imageUrl:
      "https://images.adsttc.com/media/images/5bad/284c/f197/cc8d/7400/003a/large_jpg/01_Ancient-Roman-Empire-State-Building.jpg?1538074693",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: "40.7484405",
      lng: "-73.9878531",
    },
    creator: "u2",
  },
];

const UsersPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UsersPlaces;
