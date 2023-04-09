import { Stack, Card, CardBody, Heading } from "@chakra-ui/react";

// export const AnswersStack = (answers: string[]) => {
//   return (
//     <Stack spacing="4">
//       {(answers as string[]).map((answer: string) => (
//         <Answer {...{ string: answer }} />
//       ))}
//     </Stack>
//   );
// };

export const Answer = ({ string: string }) => {
  return (
    <Card key={string} variant="elevated" width={"100%"}>
      <CardBody>
        <Heading size="md"> {string}</Heading>
      </CardBody>
    </Card>
  );
};
