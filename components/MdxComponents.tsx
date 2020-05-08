import BlogMeta from './BlogMeta';
import { Title3, Title1, Title2, Strong } from './dls/Title';
import Text from './dls/Text';
import Anchor, { OutboundAnchor } from './dls/Anchor';
import List from './dls/List';
import Figure from './Figure';
import Button from './dls/Button';
import Spacing from './dls/Spacing';

const components = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  p: Text,
  a: Anchor,
  Anchor: Anchor,
  OutboundAnchor: OutboundAnchor,
  ul: List,
  BlogMeta: BlogMeta,
  Figure: Figure,
  Spacing: Spacing,
  Button: Button,
  strong: Strong,
};

export default components;
