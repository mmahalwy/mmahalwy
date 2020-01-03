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
      <p>👋👋</p>
      <p>
        I am a software engineer at{' '}
        <a href="https://airbnb.com" target="_blank">
          Airbnb
        </a>
        , working on Omni - an internal CMS that allows anyone to create{' '}
        <a href="https://airbnb.com/adventures" target="_blank">
          landing pages
        </a>
        ,{' '}
        <a
          href="https://reallygoodemails.com/emails/now-serving-your-most-memorable-meal-yet/"
          target="_blank"
        >
          emails
        </a>{' '}
        and{' '}
        <a
          href="https://www.airbnb.com/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A1712"
          target="_blank"
        >
          search promotions
        </a>{' '}
        without the need to code deployment!
      </p>
      <p>
        <strong>On my free time,</strong> I enjoy playing soccer, eating out, hanging out with
        friends and working on side projects.
      </p>
      <p>
        <strong>
          <a href="mailto:mmahalwy@gmail.com">Talk to me</a>
        </strong>{' '}
        about 📈investing, 🏠real estate, 🖥tech and 🇨🇦Canada!
      </p>
      <p>
        <strong>I hang out</strong> on{' '}
        <a href="https://twitter.com/mmahalwy" target="_blank">
          Twitter
        </a>
        ,{' '}
        <a href="https://instagram.com/mmahalwy" target="_blank">
          Instagram
        </a>{' '}
        and{' '}
        <a href="https://github.com/mmahalwy" target="_blank">
          Github
        </a>
      </p>
    </div>
  );
};

export default Index;
