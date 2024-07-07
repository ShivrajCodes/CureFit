
const getTimeDiff = (time) => {
  const timeDiff = new Date().getHours() - new Date(time).getHours();
  return timeDiff;
};
const ArticleMetadata = ({ author, publishedAt }) => {
  return (
    <p className="text-sm text-neutral-500">
      <span className="text-blue-500 font-medium">{author}</span> •{" "}
      {getTimeDiff(publishedAt)} hours ago
    </p>
  );
};
export default ArticleMetadata;
