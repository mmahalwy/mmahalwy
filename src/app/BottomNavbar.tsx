'use client';

import { ActionIcon, Affix, Box, Divider, Flex, Group, Tooltip } from '@mantine/core';
import Link from 'next/link';
import { MaterialSymbol, MaterialSymbolProps } from 'react-material-symbols';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';

const LINKS: { link: string; label: string; icon: MaterialSymbolProps['icon'] }[] = [
  { link: '/', label: 'Home', icon: 'home' },
  { link: '/blog', label: 'Blog', icon: 'edit' },
  { link: '/brands', label: 'Favorite Brands', icon: 'star' },
  { link: '/startup-ideas', label: 'Startup Ideas', icon: 'science' },
  // { link: '/community', label: 'Community' },
];

const SOCIAL: { link: string; Icon: IconType }[] = [
  {
    link: 'https://twitter.com/mofromyyz',
    Icon: FaTwitter,
  },
  {
    link: 'https://instagram.com/mofromyyz',
    Icon: FaInstagram,
  },
];

const BottomNavbar = () => {
  return (
    <Flex pos="fixed" bottom={24} left={0} right={0} align="center" justify="center">
      <Box
        style={{
          borderRadius: '1009px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.24) 100%)',
          boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(12px)',
        }}
        p="8px"
      >
        <Group gap="4px" align="center">
          <Group>
            {LINKS.map((link) => (
              <Tooltip key={link.label} label={link.label} color="black">
                <ActionIcon
                  key={link.label}
                  variant="transparent"
                  color="gray"
                  radius="lg"
                  size="xl"
                  component={Link}
                  href={link.link}
                >
                  <MaterialSymbol icon={link.icon} size={24} fill grade={-25} />
                </ActionIcon>
              </Tooltip>
            ))}
          </Group>
          <Divider orientation="vertical" color="rgba(255,255,255,0.12)" />
          <Group gap="4px" align="center">
            {SOCIAL.map((link) => (
              <ActionIcon
                key={link.link}
                variant="transparent"
                color="gray"
                radius="lg"
                size="xl"
                component={Link}
                href={link.link}
              >
                <link.Icon size={24} />
              </ActionIcon>
            ))}
          </Group>
        </Group>
      </Box>
    </Flex>
  );
};

export default BottomNavbar;
