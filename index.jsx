// src/App.js
import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "expenses_v1";

function App() {
  const [items, setItems] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "General",
    date: new Date().toISOString().slice(0, 10),
    type: "expense", // "income" or "expense"
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const totals = useMemo(() => {
    const income = items.filter(i => i.type === "income").reduce((s, i) => s + i.amount, 0);
    const expense = items.filter(i => i.type === "expense").reduce((s, i) => s + i.amount, 0);
    return { income, expense, balance: income - expense };
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    const amountNum = parseFloat(form.amount);
    if (!form.title || isNaN(amountNum) || amountNum <= 0) return;
    setItems(prev => [
      ...prev,
      { id: crypto.randomUUID(), ...form, amount: amountNum }
    ]);
    setForm({ ...form, title: "", amount: "" });
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const categories = ["General", "Food", "Travel", "Bills", "Shopping", "Savings"];

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>Expense Tracker</h1>

      <section style={{ display: "flex", gap: "1rem" }}>
        <Card label="Income" value={totals.income} />
        <Card label="Expense" value={totals.expense} />
        <Card label="Balance" value={totals.balance} />
      </section>

      <form onSubmit={addItem} style={{ marginTop: "1rem", display: "grid", gap: "0.5rem", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input placeholder="Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
        <input type="number" step="0.01" placeholder="Amount" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
        <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
        <button type="submit">Add</button>
      </form>

      <table style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th align="left">Type</th><th align="left">Title</th><th align="right">Amount</th>
            <th align="left">Category</th><th align="left">Date</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(i => (
            <tr key={i.id} style={{ borderTop: "1px solid #eee" }}>
              <td>{i.type}</td>
              <td>{i.title}</td>
              <td align="right">₹{i.amount.toFixed(2)}</td>
              <td>{i.category}</td>
              <td>{i.date}</td>
              <td><button onClick={() => removeItem(i.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div style={{ flex: 1, padding: "1rem", border: "1px solid #ddd", borderRadius: 8 }}>
      <div style={{ fontSize: 12, color: "#666" }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 600 }}>₹{value.toFixed(2)}</div>
    </div>
  );
}

export default App;
