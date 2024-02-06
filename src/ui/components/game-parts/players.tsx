import { Card, CardBody, Heading } from "@chakra-ui/react";

export const Player = ({
  string: string,
  isActive: isActive,
  isOut: isOut,
}) => {
  const variant = () => {
    if (isActive) {
      return "elevated";
    } else if (isOut) {
      return "filled";
    } else {
      return "elevated";
    }
  };
  return (
    <Card
      key={string}
      variant={variant()}
      width={"100%"}
      borderColor={isActive ? "blue.400" : "gray.400"}
      borderWidth={isActive ? "2px" : "1px"}
    >
      <CardBody>
        <Heading size="md"> {string}</Heading>
      </CardBody>
    </Card>
  );
};
