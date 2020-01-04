import Text from '../components/dls/Text';
import Anchor from '../components/dls/Anchor';

export const meta = {
  title: 'Next.js MDX Blog Kit',
  tags: ['Next.js', 'MDX'],
  layout: 'post',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This is the home page.',
};

const Index = ({ allData }) => {
  return (
    <div>
      <Text>👋👋</Text>
      <Text>
        I am a software engineer at{' '}
        <Anchor href="https://airbnb.com" target="_blank">
          Airbnb
        </Anchor>
        , working on Omni - an internal CMS that allows anyone to create{' '}
        <Anchor href="https://airbnb.com/adventures" target="_blank">
          landing pages
        </Anchor>
        ,{' '}
        <Anchor
          href="https://reallygoodemails.com/emails/now-serving-your-most-memorable-meal-yet/"
          target="_blank"
        >
          emails
        </Anchor>{' '}
        and{' '}
        <Anchor
          href="https://www.airbnb.com/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A1712"
          target="_blank"
        >
          search promotions
        </Anchor>{' '}
        without the need to code deployment!
      </Text>
      <Text>
        <strong>On my free time,</strong> I enjoy playing{' '}
        <Anchor
          href="https://www.sfsfl.com/LibLeague/Team/Team.php?PARAM_SEASON_CODE=2019+PARAM_TEAM_CODE=BELO"
          target="_blank"
        >
          soccer
        </Anchor>
        , eating out, hanging out with friends and working on side projects.
      </Text>
      <Text>
        <strong>
          <Anchor href="mailto:mmahalwy@gmail.com">Talk to me</Anchor>
        </strong>{' '}
        about 📈investing, 🏠real estate, 🖥tech and 🇨🇦Canada!
      </Text>
      <Text>
        <strong>I hang out</strong> on{' '}
        <Anchor href="https://twitter.com/mmahalwy" target="_blank">
          Twitter
        </Anchor>
        ,{' '}
        <Anchor href="https://instagram.com/mmahalwy" target="_blank">
          Instagram
        </Anchor>{' '}
        and{' '}
        <Anchor href="https://github.com/mmahalwy" target="_blank">
          Github
        </Anchor>
      </Text>
    </div>
  );
};

export default Index;
