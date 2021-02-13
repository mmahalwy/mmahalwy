import Jimp from 'jimp';
import randomcolor from 'randomcolor';
import { getFileBySlug } from '../../../utils/mdx';

export default async (req, res) => {
  const post = await getFileBySlug('blog', req.query.slug);

  const buffer = await new Promise((resolve) => {
    // eslint-disable-next-line no-new
    new Jimp(
      1200,
      630,
      randomcolor({ luminosity: 'dark', seed: req.query.slug }),
      async (err, image) => {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);

        await image.print(
          font,
          0,
          0,
          {
            text: post.frontMatter.title,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
          },
          1200,
          630
        );

        const b = await image.getBufferAsync(Jimp.MIME_JPEG);

        resolve(b);
      }
    );
  });

  res.writeHead(200, { 'Content-Type': Jimp.MIME_JPEG });
  res.end(buffer, 'binary');
};
