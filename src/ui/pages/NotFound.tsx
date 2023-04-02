import { Button, Image } from "@chakra-ui/react";
import notFound from "../../assets/notFound.svg";

export const NotFound = () => {
  return (
    <>
      <Image src={notFound} style={{ width: "32rem" }} />
      <Button variant="primary" aria-label="home">
        Go to the Homepage
      </Button>
    </>
  );
};
