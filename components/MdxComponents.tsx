import BlogMeta from './BlogMeta';
import ConvertkitForm from './ConvertkitForm';
import { Title3, Title1, Title2, Strong } from './dls/Title';
import Text from './dls/Text';
import Anchor, { OutboundAnchor } from './dls/Anchor';
import List from './dls/List';
import Figure from './Figure';
import Button from './dls/Button';
import Spacing from './dls/Spacing';
import Code from './Code';

const components = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  p: Text,
  a: Anchor,
  Anchor: Anchor,
  OutboundAnchor: OutboundAnchor,
  ul: List,
  inlineCode: Code,
  BlogMeta: BlogMeta,
  ConvertkitForm: ConvertkitForm,
  Figure: Figure,
  Spacing: Spacing,
  Button: Button,
  strong: Strong,
  wrapper: (props) => {
    return (
      <>
        <BlogMeta meta={props.meta} />
        <main {...props} />
        <ConvertkitForm />
      </>
    );
  },
};

export default components;
