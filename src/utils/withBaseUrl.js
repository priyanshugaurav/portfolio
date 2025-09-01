// src/utils/withBaseUrl.js
export const withBaseUrl = (path) => {
  if (!path) return null;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};
