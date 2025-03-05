import Section from "@/components/section-container";
import { cn } from "@/lib/utils";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import React, { Fragment } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum",
};

export default function page() {
  return (
    <Fragment>
      <Header />
      <Section className="mt-[56] px-5">
        <div className=" flex flex-col gap-[26px]">
          <h1
            className={cn(
              frutigerBold.className,
              "text-white text-[32px] leading-[40px]"
            )}
          >
            Impressum
          </h1>
          <div
            className={cn(
              frutigerRegular.className,
              "text-white text-[16px] leading-[20px]"
            )}
          >
            <p>Verantwortlich für den Inhalt dieser Website gemäß § 5 TMG:</p>
            <p>Schwan, Ruben & Zehnder, Julius GbR</p>
            <p>Blaekbit® Software</p>
            <p>Postfach 93 02 01</p>
            <p>60457 Frankfurt am Main</p>
            <br />
            <p>Kontakt:</p>
            <p>E-Mail: info@blaekbit.de</p>
            <br />
            <p>
              Umsatzsteuer-Identifikationsnummer (nach §27 a
              Umsatzsteuergesetz):
            </p>
            <p>DE 366698088</p>
            <br />
            <p>Vertretungsberechtigte Gesellschafter:</p>
            <p>Ruben Schwan, Julius Zehnder</p>
            <p>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              (Rundfunkstaatsvertrag):
            </p>
            <p>Ruben Schwan & Julius Zehnder</p>
            <br />
            <p>Haftungshinweis:</p>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt verlinkter
              Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            <br />
            <p>Urheberrechtshinweise:</p>
            <p>
              Die auf dieser Website verwendeten Texte, Bilder und Grafiken
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser
              Seite sind nicht gestattet.
            </p>
            <br />
            <p>Markenrechtlicher Schutz:</p>
            <p>
              Die Wort- und Bildmarke Blaekbit® ist beim Deutschen Patent- und
              Markenamt (DPMA) registriert. Wir weisen ausdrücklich darauf hin,
              dass die unberechtigte Nutzung unserer Marke Blaekbit® sowohl in
              textlicher als auch in bildlicher Form eine Verletzung unserer
              Markenrechte darstellt und rechtliche Konsequenzen nach sich
              ziehen kann. Dies umfasst unter anderem, aber nicht
              ausschließlich, die unautorisierte Verwendung in Werbematerialien,
              auf Webseiten, in sozialen Medien sowie in gedruckten
              Publikationen. Jede unautorisierte Verwendung wird von uns
              verfolgt und kann zur Einleitung rechtlicher Schritte führen,
              einschließlich, aber nicht beschränkt auf Unterlassungsklagen und
              Schadensersatzforderungen.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}
