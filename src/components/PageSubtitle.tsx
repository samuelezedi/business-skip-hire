interface PageSubtitleProps {
  title: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ title }) => (
  <p className="text-gray-400 text-center mb-8">{title}</p>
);

export default PageSubtitle;
