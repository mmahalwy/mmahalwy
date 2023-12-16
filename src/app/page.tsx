import { Container, Stack, Title, Text, Anchor, Group, Button, Box } from '@mantine/core';
import Image from 'next/image';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import peek from './images/peek.png';
import airbnb from './images/airbnb.png';
import shepherd from './images/shepherd.png';

const EXPERIENCE = [
  {
    title: 'Cofounder & CTO',
    name: 'Shepherd',
    logo: shepherd,
  },
  {
    title: 'Sr Software Engineer',
    name: 'Airbnb',
    logo: airbnb,
  },
  {
    title: 'Software Engineer',
    name: 'Peek',
    logo: peek,
  },
];

export default function Home() {
  return (
    <Container size="sm" pt={125}>
      <Stack gap="100px">
        <Stack gap="md">
          <Group gap="xs">
            <Text>👋</Text>
            <Text c="rgba(255,255,255,0.55)"> You can call me Mo</Text>
          </Group>
          <Title c="white" fz={36} lh={'43px'} fw={400}>
            I'm the cofounder and CTO of Shepherd, a commercial construction insurtech.
          </Title>
          <Text size="lg" fz={18} lh={'27px'}>
            On my free time, I enjoy playing pickleball, reading, cooking and hanging out with
            friends. I created this website as a form of self expression. You'll find some
            thoughtful blog posts, hangout areas and
          </Text>
          <Box>
            <Button
              variant="gradient"
              size="md"
              gradient={{ from: '#1F1F1F', to: '#292929', deg: 180 }}
              style={{
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Stack>
        <Box>
          <Box
            w={240}
            h={240}
            pos="relative"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              transform: 'rotate(-8deg)',
              boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.50)',
            }}
          >
            <Image src={image1} alt="Image 1" layout="fill" objectFit="cover" />
          </Box>
          <Box
            w={240}
            h={240}
            pos="relative"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              transform: 'rotate(8deg)',
              boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.50)',
              marginTop: -40,
              marginLeft: 180,
            }}
          >
            <Image src={image2} alt="Image 2" layout="fill" objectFit="cover" />
          </Box>
          <Box
            w={240}
            h={240}
            pos="relative"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              transform: 'rotate(-8deg)',
              boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.50)',
              marginTop: -40,
            }}
          >
            <Image src={image3} alt="Image 3" layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Stack>
          <Title order={3} fz="18px" fw={600} lh="150%">
            Experience
          </Title>
          {EXPERIENCE.map((item) => (
            <Group key={item.name}>
              <Box
                w="44px"
                h="44px"
                pos="relative"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                }}
              >
                <Image src={item.logo} alt={item.name} layout="fill" objectFit="cover" />
              </Box>
              <Stack gap={0}>
                <Text size="lg" c="white">
                  {item.name}
                </Text>
                <Text c="rgba(255, 255, 255, 0.56)">{item.title}</Text>
              </Stack>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
