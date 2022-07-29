import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

import { Colors } from "../../constants/styles";

type Type = React.FC<
  TextInputProps & {
    label: string;
    secure?: boolean;
    onUpdateValue: (value: string) => void;
    isInvalid: boolean;
  }
>;

const Input: Type = (props) => {
  const { label, keyboardType, secure, onUpdateValue, value, isInvalid } =
    props;
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  label: {
    color: Colors.primary,
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.secondary,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
