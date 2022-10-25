// eslint-disable-next-line no-undef
export default async (input: string, init?: RequestInit) => {
  let res;
  try {
    res = await fetch(input.startsWith('http') ? input : `http://localhost:3000${input}`, init);
  } catch (err: any) {
    res = { isFailed: true, err };
  }
  return res instanceof Response ? await res.json() : res;
};
