import { authStorage } from '../auth/authStorage';

const BASE_URL = 'http://localhost:3000';

function authHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authStorage.getToken()}`,
  };
}

export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserPayload = {
  name: string;
  email: string;
  password?: string;
};

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { message?: string };
    throw new Error(body.message ?? `HTTP ${res.status}`);
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export const usersApi = {
  list: (): Promise<User[]> =>
    fetch(`${BASE_URL}/users`, { headers: authHeaders() }).then(handleResponse<User[]>),

  get: (id: number): Promise<User> =>
    fetch(`${BASE_URL}/users/${id}`, { headers: authHeaders() }).then(handleResponse<User>),

  create: (payload: UserPayload): Promise<User> =>
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(payload),
    }).then(handleResponse<User>),

  update: (id: number, payload: UserPayload): Promise<User> =>
    fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(payload),
    }).then(handleResponse<User>),

  delete: (id: number): Promise<void> =>
    fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    }).then(handleResponse<void>),
};
