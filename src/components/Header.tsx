import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-700 text-white">
      <h1 className="font-bold text-lg">Agri-Waste Mart</h1>
      <nav className="space-x-4">
        <Link href="/sell">Sell</Link>
        <Link href="/buy">Buy</Link>
      </nav>
    </header>
  );
}
