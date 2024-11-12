import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://kcdevdes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          kcdevdes.com
        </Link>
      </Text>
    </Flex>
  );
};
