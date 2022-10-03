// eslint-disable-next-line no-undef
export default async (input: string, init?: RequestInit) => {
  const res = await fetch(input.startsWith('http') ? input : `http://localhost:3000${input}`, init);
  return await res.json();
};
