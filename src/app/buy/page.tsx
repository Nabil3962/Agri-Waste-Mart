"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Listing } from "@/types/listing";

export default function BuyPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [wasteFilter, setWasteFilter] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      const snapshot = await getDocs(collection(db, "listings"));
      const data = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() }) as Listing
      );
      setListings(data);
    };

    fetchListings();
  }, []);

  const filteredListings = listings.filter(
    (item) =>
      (!wasteFilter || item.wasteType === wasteFilter) &&
      item.location
        .toLowerCase()
        .includes(locationSearch.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <select
          className="border p-2"
          onChange={(e) => setWasteFilter(e.target.value)}
        >
          <option value="">All Waste Types</option>
          <option>Rice Straw</option>
          <option>Jute Sticks</option>
          <option>Sugarcane Bagasse</option>
        </select>

        <input
          className="border p-2"
          placeholder="Search by location"
          onChange={(e) => setLocationSearch(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {filteredListings.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{item.wasteType}</h3>
            <p>Quantity: {item.quantity} {item.unit}</p>
            <p>Price: Tk {item.pricePerTon} / Ton</p>
            <p>Location: {item.location}</p>

            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
              Contact Seller
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
