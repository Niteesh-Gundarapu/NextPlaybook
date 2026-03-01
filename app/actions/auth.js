'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login() {
  cookies().set('session', 'authenticated', {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    path: '/'
  });

  redirect('/dashboard');
}

export async function logout() {
  cookies().delete('session');
  redirect('/');
}
