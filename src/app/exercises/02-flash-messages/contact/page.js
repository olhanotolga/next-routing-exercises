'use client';
import React from 'react';
import { useRouter } from 'next/navigation'

function ContactPage() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    router.push('/exercises/02-flash-messages');
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
