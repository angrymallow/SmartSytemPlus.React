import {
  AppleAvatar,
  AvocadoAvatar,
  CoconutAvatar,
  LemonAvatar,
  OrangeAvatar,
  PearAvatar,
} from "../assets/icons";

const getAvatar = (fruit: string) => {
  switch (fruit) {
    case "apple":
      return <AppleAvatar />;
    case "orange":
      return <OrangeAvatar />;
    case "avocado":
      return <AvocadoAvatar />;
    case "coconut":
      return <CoconutAvatar />;
    case "lemon":
      return <LemonAvatar />;
    case "pear":
      return <PearAvatar />;
    default:
      return <AppleAvatar />;
  }
};

export { getAvatar };