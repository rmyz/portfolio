import fetch from 'node-fetch';

const genericUrl = 'http://localhost:3026';

const options = { method: 'GET' };

const _fetchData = async url => {
  const data = await fetch(url, options);

  return await data.json();
};

export const getGithubInfo = async () => {
  const githubUrl = `${genericUrl}/github`;

  return await _fetchData(githubUrl);
};

export const getLinkedinInfo = async () => {
  const linkedinUrl = `${genericUrl}/linkedin`;

  return await _fetchData(linkedinUrl);
};
