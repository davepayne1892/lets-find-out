import { Flex, Progress, Text } from "@chakra-ui/react";
import { GameClock } from "../../../constants/models";

export const ProgressBar = (clock: GameClock) => {
  return (
    <Flex flexDirection="row" width="100%" alignItems="center">
      <Progress
        value={clock.progress}
        height="24px"
        borderRadius="2xl"
        sx={{
          "& > div": {
            background:
              "linear-gradient(90deg, rgba(104, 211, 145, 1) 0%, rgba(66, 153, 225, 1) 49%, rgba(251, 182, 206, 1) 100%)",
          },
        }}
        isAnimated
        w="95%"
        // grow={1}
      />
      <Text ml="auto">{`${clock.minutes}:${clock.seconds}`}</Text>
    </Flex>
  );
};
