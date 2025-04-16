interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => (
  <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
);

export default PageHeader;
