const featured = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>featured container</div>;
};

export default featured;
