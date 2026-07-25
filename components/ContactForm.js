'use client';

import { useState } from 'react';
import { trackContactSubmit } from '@/lib/analytics';

// Formspree (or any endpoint that accepts a POST of form fields and returns
// JSON) — set NEXT_PUBLIC_FORMSPREE_ENDPOINT in Vercel, e.g.
// https://formspree.io/f/xxxxxxx
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const errorText = {
  margin: 'calc(var(--space-1)) 0 0',
  fontSize: '12px',
  color: 'var(--color-accent-2-700)',
};

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    // Honeypot: bots fill hidden fields. If _gotcha has a value, pretend
    // success and never send. (Formspree also drops _gotcha submissions.)
    if (fd.get('_gotcha')) {
      setStatus('success');
      return;
    }

    const values = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      message: String(fd.get('message') || '').trim(),
      outbound_for: String(fd.get('outbound_for') || ''),
    };

    const nextErrors = {};
    if (!values.name) nextErrors.name = 'Please enter your name.';
    if (!values.email) nextErrors.email = 'Please enter your email.';
    else if (!emailOk(values.email)) nextErrors.email = 'That email doesn’t look right.';
    if (!values.message) nextErrors.message = 'Tell us a little about what you need.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (!ENDPOINT) {
      setStatus('error');
      setErrorMsg('The form isn’t connected yet — email micheal@leadghost.co in the meantime.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
      if (res.ok) {
        setStatus('success');
        trackContactSubmit({ outbound_for: values.outbound_for || 'unspecified' });
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMsg(
          data?.errors?.[0]?.message ||
            'Something went wrong. Please try again, or email micheal@leadghost.co.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network hiccup — please try again, or email micheal@leadghost.co.');
    }
  }

  return (
    <section
      id="contact"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'calc(2*var(--leading)) var(--edge) calc(3*var(--leading))',
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '13px',
          lineHeight: 'var(--half)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
          margin: '0 0 calc(var(--leading) - var(--half))',
        }}
      >
        <span style={{ color: 'var(--color-accent-2)' }}>No. 6</span> &mdash; Prefer to write first?
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--font-heading-weight)',
          fontSize: 'clamp(26px,3vw,34px)',
          lineHeight: 'calc(1.5*var(--leading))',
          letterSpacing: '-0.015em',
          margin: '0 0 calc(var(--leading) - 1cap)',
          maxWidth: '22ch',
        }}
      >
        Tell us what you’re after.
      </h2>

      {status === 'success' ? (
        <div role="status" style={{ maxWidth: 'var(--measure)' }}>
          <p style={{ fontSize: '18px', lineHeight: 'var(--leading)', margin: 0 }}>
            Thanks — your message is in. We’ll get back to you shortly. Prefer to talk now?{' '}
            <a href="#book">Book a call</a>.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate style={{ maxWidth: '640px' }}>
          {/* Honeypot — hidden from people, tempting to bots. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            <label>
              Company website
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--leading)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input className="input" id="name" name="name" type="text" autoComplete="name" aria-invalid={!!errors.name} />
                {errors.name && <p style={errorText}>{errors.name}</p>}
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input className="input" id="company" name="company" type="text" autoComplete="organization" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input className="input" id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
              {errors.email && <p style={errorText}>{errors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor="outbound_for">What are you outbound for?</label>
              <select className="input" id="outbound_for" name="outbound_for" defaultValue="">
                <option value="" disabled>
                  Choose one…
                </option>
                <option value="Selling a service">Selling a service</option>
                <option value="Sourcing deals">Sourcing deals</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea className="input" id="message" name="message" rows={5} aria-invalid={!!errors.message} />
              {errors.message && <p style={errorText}>{errors.message}</p>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'error' && (
                <p role="alert" style={{ margin: 0, fontSize: '13px', color: 'var(--color-accent-2-700)' }}>
                  {errorMsg}
                </p>
              )}
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
