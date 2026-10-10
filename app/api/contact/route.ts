import { contactSchema } from '@/lib/validations';
import { NextResponse } from 'next/server';
import axios from 'axios';
import https from 'https';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Honeypot check — silently drop, still return success
    if (parsed.data.company) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, message } = parsed.data;
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      'f7933732-7984-40b5-8fa1-11517b4f6581';

    if (!accessKey) {
      console.warn("Web3Forms Access Key not configured.");
      return NextResponse.json({ error: 'Setup incomplete' }, { status: 500 });
    }

    // Send to Web3Forms using axios with custom https agent to bypass proxy SSL issues
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });

    const response = await axios.post('https://api.web3forms.com/submit', {
      access_key: accessKey,
      name: name,
      email: email,
      message: message,
      subject: `New message from ${name} on your portfolio`,
      from_name: 'Portfolio Contact Form'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      httpsAgent: agent
    });

    const result = response.data;
    
    if (result.success) {
      return NextResponse.json({ ok: true });
    } else {
      console.error('Web3Forms error:', result);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
