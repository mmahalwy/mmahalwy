import PostListing from '../components/PostListing';

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
      <p>Mohamed El Mahallawy</p>
      <p>
        I am a software engineer at Airbnb, working on Omni - an internal CMS that allows anyone to
        create landing pages, emails and search promotions without the need to code deployment!
      </p>
      <h1>Posts</h1>
      {allData
        .filter((content) => content.type == 'post')
        .map((post, index) => (
          <PostListing key={index} post={post} indes={index} />
        ))}
    </div>
  );
};

export default Index;
