'use client';
import { useState } from 'react';
import { Container, Group, Burger, Anchor, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Navbar.module.css';
import Link from 'next/link';
import { IconHome } from '@tabler/icons-react';

const links = [
  { link: '/blog', label: 'Blog' },
  { link: '/brands', label: 'Favorite Brands' },
  { link: '/startup-ideas', label: 'Startup Ideas' },
  // { link: '/community', label: 'Community' },
];

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) =>
    link.link.startsWith('/') ? (
      <Link passHref legacyBehavior key={link.label} href={link.link}>
        <Button
          component="a"
          key={link.label}
          href={link.link}
          variant="transparent"
          c="black"
          size="compact-sm"
        >
          {link.label}
        </Button>
      </Link>
    ) : (
      <Button
        component="a"
        key={link.label}
        href={link.link}
        variant="transparent"
        c="black"
        size="compact-sm"
      >
        {link.label}
      </Button>
    ),
  );

  return (
    <header className={classes.header}>
      <Container size="sm" className={classes.inner}>
        <Anchor component={Link} href="/" c="black">
          <IconHome />
        </Anchor>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Navbar;
