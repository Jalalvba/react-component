'use client';
import { useState } from 'react';
import useData from './useData';

export default function TextInputEditor() {
  const { headers, loading } = useData();
  const [form, setForm] = useState({});

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form>
      <h2>✏️ Text Input Editor</h2>
      {headers.map(header => (
        <div key={header}>
          <label>{header}</label>
          <input
            type="text"
            value={form[header] || ''}
            onChange={e => handleChange(header, e.target.value)}
          />
        </div>
      ))}
    </form>
  );
}
