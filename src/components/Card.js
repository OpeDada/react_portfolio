import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <Box height="100%" borderRadius="lg" color="#000" bg="#fff">
        <Image src={imageSrc} alt="Card Image" borderRadius="8px" />
        <Box p="4">
          <Text fontWeight="bold" fontSize="l">
            {title}
          </Text>
          <Text my="2" fontSize="sm" fontWeight="light">
            {description}
          </Text>
          <Text fontSize="sm">
            See More
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ paddingLeft: "8px" }}
              size="1x"
            />
          </Text>
        </Box>
      </Box>
    </HStack>
  );
};

export default Card;
