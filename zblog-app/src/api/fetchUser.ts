type Props = {
  username: string,
  password: string
}

export default async function fetchUser({ username, password }: Props): Promise<string[]> {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  return data;

}