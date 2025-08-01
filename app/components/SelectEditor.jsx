'use client';
import { useState } from 'react';
import useData from './useData';

const options = ['Option A', 'Option B', 'Option C'];

export default function SelectEditor() {
  const { headers, loading } = useData();
  const [form, setForm] = useState({});

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form>
      <h2>🎛️ Select Dropdown Editor</h2>
      {headers.map(header => (
        <div key={header}>
          <label>{header}</label>
          <select
            value={form[header] || ''}
            onChange={e => handleChange(header, e.target.value)}
          >
            <option value="">-- choose --</option>
            {options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}
    </form>
  );
}
