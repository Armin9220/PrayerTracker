import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function PrayerPage() {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    const fetchPrayers = async () => {
      const { data, error } = await supabase.from('prayers').select('*');
      if (error) alert('Fehler beim Laden der Gebete: ' + error.message);
      else setPrayers(data);
    };
    fetchPrayers();
  }, []);

  const togglePrayer = async (id, status) => {
    const { error } = await supabase.from('prayers').update({ status: !status }).eq('id', id);
    if (error) alert('Fehler beim Aktualisieren: ' + error.message);
    else setPrayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: !status } : p))
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Gebete</h1>
      <ul>
        {prayers.map((prayer) => (
          <li key={prayer.id} className="flex justify-between mb-2">
            <span>{prayer.name} ({prayer.time})</span>
            <button
              className={`py-1 px-3 rounded ${prayer.status ? 'bg-green-500' : 'bg-gray-500'}`}
              onClick={() => togglePrayer(prayer.id, prayer.status)}
            >
              {prayer.status ? 'Erledigt' : 'Offen'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrayerPage;
