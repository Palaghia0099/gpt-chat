import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4', // sau 'gpt-3.5-turbo' dacă nu ai acces la gpt-4
    messages,
  })

  const responseMessage = chatCompletion.choices[0].message?.content || 'Fără răspuns.'

  return NextResponse.json({ message: responseMessage })
}
