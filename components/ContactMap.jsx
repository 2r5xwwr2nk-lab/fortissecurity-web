"use client";

import { useLanguage } from "./LanguageProvider";

export default function ContactMap() {
  const { language, t } = useLanguage();

  const labels = {
    sk: "Poloha firmy",
    en: "Company location",
    de: "Firmenstandort",
  };

  const companyAddress = "Obrancov mieru 1346/11, Slovensko";
  const encodedAddress = encodeURIComponent(companyAddress);

  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const openMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section className="contact-map-section">
      <div className="contact-map-frame">
        <iframe
          src={mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fortis Security mapa"
        />
      </div>

      <div className="contact-map-grid" />
      <div className="contact-map-scanline" />

      <div className="contact-map-marker">
        <span />
      </div>

      <div className="contact-map-content">
        <div className="contact-map-card">
          <div>
            <p className="contact-map-kicker">
              {labels[language] || labels.sk}
            </p>

            <strong>{t.map.title}</strong>
            <span>{t.map.address}</span>
          </div>

          <a
            href={openMapUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-map-button"
          >
            {t.map.button}
          </a>
        </div>
      </div>
    </section>
  );
}