import { Flex, Progress, Text } from "@chakra-ui/react";
import { GameClock } from "../../../../constants/models";

export const ProgressBar = (clock: GameClock) => {
  return (
    <Flex flexDirection="row" width="100%" alignItems="center">
      <Progress
        value={clock.progress}
        height="24px"
        borderRadius="md"
        sx={{
          "& > div": {
            background: "white",
          },
        }}
        bgColor={"mainColor"}
        isAnimated
        w="95%"
      />
      <Text ml="auto">{`${clock.minutes}:${clock.seconds}`}</Text>
    </Flex>
  );
};
