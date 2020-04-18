import BlogMeta from './BlogMeta';
import { Title3, Title1, Title2 } from './dls/Title';
import Text from './dls/Text';
import Anchor from './dls/Anchor';
import List from './dls/List';
import Figure from './Figure';
import Button from './dls/Button';

const components = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  p: Text,
  a: Anchor,
  ul: List,
  BlogMeta: BlogMeta,
  Figure: Figure,
  Button: Button,
};

export default components;
