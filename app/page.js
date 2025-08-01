import TextInputEditor from './components/TextInputEditor';
import SelectEditor from './components/SelectEditor';
import CheckboxEditor from './components/CheckboxEditor';
import MixedEditor from './components/MixedEditor';
import RowEditor from './components/RowEditor';

export default function Page() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🎯 Controlled Components Playground</h1>

      {/* ✅ Choisis le composant que tu veux tester ici : */}
      {/* <TextInputEditor /> */}
      {/* <SelectEditor /> */}
      {/* <CheckboxEditor /> */}
      {/* <MixedEditor /> */}
      <RowEditor />
    </main>
  );
}
