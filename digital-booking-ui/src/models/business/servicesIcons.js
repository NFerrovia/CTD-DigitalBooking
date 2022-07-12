import AcUnitIcon from "@material-ui/icons/AcUnit";
import KitchenIcon from "@material-ui/icons/Kitchen";
import WifiIcon from "@material-ui/icons/Wifi";
import PetsIcon from "@material-ui/icons/Pets";
import PoolIcon from "@material-ui/icons/Pool";
import TvIcon from "@material-ui/icons/Tv";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import SmokeFreeIcon from "@material-ui/icons/SmokeFree";

export const SERVICES = {
  ac: {
    icon: <AcUnitIcon />,
    text: "A/C",
  },
  kitchen: {
    icon: <KitchenIcon />,
    text: "Kitchen",
  },
  wifi: {
    icon: <WifiIcon />,
    text: "WIFI",
  },
  petFriendly: {
    icon: <PetsIcon />,
    text: "Pet friendly",
  },
  pool: {
    icon: <PoolIcon />,
    text: "Pool",
  },
  tv: {
    icon: <TvIcon />,
    text: "TV",
  },
  parking: {
    icon: <DriveEtaIcon />,
    text: "Free parking",
  },
  smoking: {
    icon: <SmokingRoomsIcon />,
    text: "Smoking allowed",
  },
  noSmoking: {
    icon: <SmokeFreeIcon />,
    text: "No smoking",
  },
};

export const SERVICES_OPTIONS = {
  "A/C": "ac",
  Kitchen: "kitchen",
  WIFI: "wifi",
  "Pet friendly": "petFriendly",
  Pool: "pool",
  TV: "tv",
  "Free parking": "parking",
  "Smoking allowed": "smoking",
  "No smoking": "noSmoking",
};
