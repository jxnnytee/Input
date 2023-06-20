import { useState } from "react";
import { Box, Text, Select, Center, Button } from "@chakra-ui/react";

function App() {
  const [step, setStep] = useState(1);
  const [make, setMake] = useState("");
  const [color, setColor] = useState("");
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);
  const [, setResult] = useState("");

  const handleNext = () => {
    if (step === 1 && make !== "") {
      setStep(2);
    } else if (step === 2 && color !== "") {
      setStep(3);
    } else if (step === 3 && code !== "") {
      const generatedResult = `I have a ${make} and the color is ${color}. REF: ${code}`;
      setResult(generatedResult);
      setCompleted(true);
    }
  };

  return (
    <Box minW="100%" p={4}>
      <Center>
        <Box
          minH={300}
          w={{ base: 400, md: 700, lg: 1000 }}
          border={"black solid 1px"}
          p={4}
        >
          <Center>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              {step === 1
                ? "Make"
                : step === 2
                ? "Color"
                : step === 3 && !completed
                ? "Code"
                : "Generated Text"}
            </Text>
          </Center>
          {step === 1 && (
            <Center>
              <Select
                value={make}
                size={{ base: "md", md: "lg" }}
                mt={4}
                w="100%"
                onChange={(e) => setMake(e.target.value)}
              >
                <option value="">Choose Car</option>
                <option value="AUDI">AUDI</option>
                <option value="BMW">BMW</option>
                <option value="VAUXHALL">VAUXHALL</option>
                <option value="MERCEDES">MERCEDES</option>
                <option value="PEUGEOT">PEUGEOT</option>
                <option value="RENAULT">RENAULT</option>
              </Select>
            </Center>
          )}
          {step === 2 && (
            <Center>
              <Select
                value={color}
                size={{ base: "md", md: "lg" }}
                mt={4}
                w="100%"
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="">Choose Colour</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
              </Select>
            </Center>
          )}
          {step === 3 && !completed && (
            <Center>
              <Box mt={4} border={"1px solid black"}>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Box>
            </Center>
          )}
          {step === 3 && completed ? (
            <Center>
              <Box mt={4}>
                <Text>
                  I have a {make} and the color is {color}.
                </Text>
                <Text mt={2}>REF: {code}</Text>
                {color === "Red" && (
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    THE CAR IS RED! NICE!!
                  </Text>
                )}
              </Box>
            </Center>
          ) : null}
          {step !== 3 || (step === 3 && !completed) ? (
            <Center mt={4}>
              <Button size={{ base: "md", md: "lg" }} onClick={handleNext}>
                {step === 3 && !completed ? "Done" : "Next"}
              </Button>
            </Center>
          ) : null}
        </Box>
      </Center>
    </Box>
  );
}

export default App;
