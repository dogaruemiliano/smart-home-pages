import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: Ionicons.name;
  color: string;
  size: number;
  onPress: () => {};
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, color, size, onPress } = props;
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
