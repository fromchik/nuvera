type RawHtmlBlockProps = {
  html: string;
};

export function RawHtmlBlock({ html }: RawHtmlBlockProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
