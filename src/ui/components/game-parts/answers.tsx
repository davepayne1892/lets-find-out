import { Card, CardBody, Heading } from "@chakra-ui/react";

export const Answer = ({ string: string }) => {
  return (
    <Card key={string} variant="elevated" width={"100%"}>
      <CardBody>
        <Heading size="md"> {string}</Heading>
      </CardBody>
    </Card>
  );
};
