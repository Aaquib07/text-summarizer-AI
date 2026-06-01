import { v4 as uuidv4 } from 'uuid';

const SESSION_KEY = 'ts_session_id';

export function getSessionId() {
  if (typeof window === 'undefined') return null;
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = uuidv4();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}
