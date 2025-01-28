import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function QuranPage() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      const { data, error } = await supabase.from('quran_progress').select('*');
      if (error) alert('Fehler beim Laden der Seiten: ' + error.message);
      else setPages(data);
    };
    fetchPages();
  }, []);

  const togglePage = async (id, completed) => {
    const { error } = await supabase.from('quran_progress').update({ completed: !completed }).eq('id', id);
    if (error) alert('Fehler beim Aktualisieren: ' + error.message);
    else setPages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, completed: !completed } : p))
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Quran Fortschritt</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id} className="flex justify-between mb-2">
            <span>Seite {page.page}</span>
            <button
              className={`py-1 px-3 rounded ${page.completed ? 'bg-green-500' : 'bg-gray-500'}`}
              onClick={() => togglePage(page.id, page.completed)}
            >
              {page.completed ? 'Erledigt' : 'Offen'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuranPage;
