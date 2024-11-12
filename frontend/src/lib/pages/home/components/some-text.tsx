import { Grid, Heading, Text } from '@chakra-ui/react';
import { config } from '@/config';

export const SomeText = async () => {
  const response = await fetch(config.baseApiUrl + '/greeting');
  const data = response.text();

  return (
    <Grid textAlign="center">
      <Heading as="h1" size="2xl" fontWeight="bold">
        zzrrt-frontend
      </Heading>

      <Text fontSize="xs">
        This is a test page to check if Spring Boot server and Next.js are
        connected well.
      </Text>

      <Text fontSize={'2xl'}>Connection Test: {data}</Text>
    </Grid>
  );
};
