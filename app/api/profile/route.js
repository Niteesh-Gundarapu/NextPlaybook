import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const isAuthed = cookies().get('session')?.value === 'authenticated';

  if (!isAuthed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({
    id: 'demo-user',
    name: 'Learning User',
    role: 'student'
  });
}
