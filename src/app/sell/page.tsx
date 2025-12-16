"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function SellPage() {
  const [form, setForm] = useState({
    wasteType: "",
    quantity: "",
    unit: "KG",
    price: "",
    location: "",
  });

  const submitListing = async () => {
    if (!form.wasteType || !form.quantity || !form.price || !form.location) {
      alert("All fields are required");
      return;
    }

    await addDoc(collection(db, "listings"), {
      wasteType: form.wasteType,
      quantity: Number(form.quantity),
      unit: form.unit,
      pricePerTon: Number(form.price),
      location: form.location,
      createdAt: serverTimestamp(),
    });

    alert("Listing submitted successfully");

    setForm({
      wasteType: "",
      quantity: "",
      unit: "KG",
      price: "",
      location: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-xl font-semibold">Sell Agricultural Waste</h2>

      <select
        className="w-full border p-2"
        value={form.wasteType}
        onChange={(e) => setForm({ ...form, wasteType: e.target.value })}
      >
        <option value="">Select Waste Type</option>
        <option>Rice Straw</option>
        <option>Jute Sticks</option>
        <option>Sugarcane Bagasse</option>
      </select>

      <input
        type="number"
        placeholder="Quantity"
        className="w-full border p-2"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <select
        className="w-full border p-2"
        value={form.unit}
        onChange={(e) => setForm({ ...form, unit: e.target.value })}
      >
        <option>KG</option>
        <option>Ton</option>
      </select>

      <input
        type="number"
        placeholder="Price (Tk per Ton)"
        className="w-full border p-2"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        placeholder="Location"
        className="w-full border p-2"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <button
        onClick={submitListing}
        className="w-full bg-green-700 text-white py-2 rounded"
      >
        Post Listing
      </button>
    </div>
  );
}
