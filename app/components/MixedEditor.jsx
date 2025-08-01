'use client';
import { useState } from 'react';
import useData from './useData';

const options = ['Yes', 'No', 'Maybe'];

export default function MixedEditor() {
  const { headers, loading } = useData();
  const [form, setForm] = useState({});

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form>
      <h2>🧪 Mixed Inputs</h2>
      {headers.map((header, i) => (
        <div key={header}>
          <label>{header}</label>
          {i % 3 === 0 ? (
            <input
              type="text"
              value={form[header] || ''}
              onChange={e => handleChange(header, e.target.value)}
            />
          ) : i % 3 === 1 ? (
            <select
              value={form[header] || ''}
              onChange={e => handleChange(header, e.target.value)}
            >
              <option value="">-- choose --</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type="checkbox"
              checked={!!form[header]}
              onChange={e => handleChange(header, e.target.checked)}
            />
          )}
        </div>
      ))}
    </form>
  );
}
