'use client';
import { useState } from 'react';
import useData from './useData';

export default function CheckboxEditor() {
  const { headers, loading } = useData();
  const [form, setForm] = useState({});

  const handleChange = (key, checked) => {
    setForm(prev => ({ ...prev, [key]: checked }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form>
      <h2>☑️ Checkbox Editor</h2>
      {headers.map(header => (
        <div key={header}>
          <label>
            <input
              type="checkbox"
              checked={!!form[header]}
              onChange={e => handleChange(header, e.target.checked)}
            />
            {header}
          </label>
        </div>
      ))}
    </form>
  );
}
