import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert('Registrierung fehlgeschlagen: ' + error.message);
    } else {
      alert('Registrierung erfolgreich! Bitte überprüfe deine E-Mail zur Bestätigung.');
      // Optional: Weiterleitung nach der Registrierung
      window.location.href = '/login';
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSignUp}>
        <h2 className="text-2xl font-bold mb-4">Registrierung</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passwort"
          className="border p-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Registrieren</button>
      </form>
    </div>
  );
}

export default SignUpPage;
