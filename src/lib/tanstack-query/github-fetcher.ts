export const fetcher = async ({ queryKey }: { queryKey: string[] }) => {
  const [url] = queryKey;
  if (!url) throw new Error("Invalid configuration");

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};
