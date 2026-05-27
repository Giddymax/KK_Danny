import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, ClipboardList, ReceiptText } from "lucide-react";
import { brand, phoneLine } from "@/lib/brand";

const highlights = [
  { icon: ReceiptText, label: "Sales", value: "Receipts" },
  { icon: Boxes, label: "Stock", value: "Inventory" },
  { icon: ClipboardList, label: "Quotes", value: "Orders" }
];

export default function Home() {
  return (
    <main className="landing-shell">
      <section className="landing-hero" aria-label={`${brand.name} landing page`}>
        <div className="landing-pattern" aria-hidden="true" />
        <div className="landing-inner">
          <div className="landing-copy">
            <Image src={brand.logo} alt={`${brand.name} logo`} width={170} height={104} className="landing-logo" priority />
            <p className="eyebrow">Adeiso building materials</p>
            <h1>{brand.name}</h1>
            <p className="landing-subtitle">{brand.tagline}</p>
            <p className="landing-address">{brand.address} {brand.location}</p>
            <Link href="/admin/login" className="landing-action">
              Open dashboard <ArrowRight size={18} />
            </Link>
          </div>

          <div className="landing-panel" aria-label="Dashboard preview">
            <div className="landing-panel-top">
              <span />
              <span />
              <span />
            </div>
            <div className="landing-panel-body">
              {highlights.map(({ icon: Icon, label, value }, index) => (
                <div key={label} className="landing-stat" style={{ "--delay": `${index * 110}ms` } as React.CSSProperties}>
                  <Icon size={22} />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="landing-scan" aria-hidden="true" />
          </div>
        </div>

        <div className="landing-footer-line">
          <span>Tel: {phoneLine}</span>
          <span>{brand.location}</span>
        </div>
      </section>
    </main>
  );
}
