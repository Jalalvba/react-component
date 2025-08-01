'use client';
import { useEffect, useState } from 'react';

export default function useData() {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = await fetch('/api/get');
      const json = await res.json();
      setHeaders(json.data[0]);
      setRows(json.data.slice(1));
      setLoading(false);
    }

    loadData();
  }, []);

  return { headers, rows, loading };
}
