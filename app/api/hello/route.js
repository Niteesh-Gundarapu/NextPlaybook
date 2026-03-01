import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from an App Router Route Handler.',
    now: new Date().toISOString()
  });
}
