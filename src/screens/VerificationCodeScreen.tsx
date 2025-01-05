import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

interface Props {
  navigation: any;
}

const VerificationCodeScreen: React.FC<Props> = ({ navigation }) => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [resendDisabled, setResendDisabled] = useState(true);

  const inputs = useRef<Array<TextInput | null>>([]);

  const handleCodeChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);

    if (value && index < code.length - 1 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }

    if (!value && index > 0 && inputs.current[index - 1]) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleConfirmCode = () => {
    navigation.navigate("NewPassword");
  };

  const handleResendCode = () => {
    setTimer(120);
    setResendDisabled(true);
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Image source={require("../../assets/lock.png")} style={styles.image} />
      <Text style={styles.title}>Verification Code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleCodeChange(value, index)}
            value={digit}
          />
        ))}
      </View>
      <Text style={styles.timerText}>
        {timer > 0 ? formatTime(timer) : "Code expired!"}
      </Text>

      <TouchableOpacity
        style={[styles.resendValid, resendDisabled && styles.disabledButton]}
        onPress={handleResendCode}
        disabled={resendDisabled}
      >
        <Text style={styles.buttonText}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleConfirmCode}>
        <Text style={styles.buttonText}>Confirm Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  resendValid: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 18,
  },
  timerText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6A5AE0",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: "#CCC",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VerificationCodeScreen;
