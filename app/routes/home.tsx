import type { Route } from "./+types/home";

const SITE_URL = "https://www.neatlie.com";
const TITLE = "Neat Lie | Good Lies. Great Pours.";
const DESCRIPTION =
  "Neat Lie is a golf and whiskey lifestyle brand for those who appreciate a good round and a better pour. Coming soon.";

export function meta({}: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: SITE_URL },

    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:site_name", content: "Neat Lie" },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },

    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Brand",
        name: "Neat Lie",
        slogan: "Good Lies. Great Pours.",
        description: DESCRIPTION,
        url: SITE_URL,
      },
    },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <p className="reveal text-xs tracking-widest-plus text-gold uppercase">
        Good Lies. Great Pours.
      </p>

      <h1 className="reveal mt-6 font-serif text-6xl font-medium tracking-tight text-forest sm:text-7xl">
        Neat Lie
      </h1>

      <div className="reveal mt-14 max-w-xl space-y-7 text-left text-lg leading-relaxed text-charcoal/85 sm:text-xl sm:leading-relaxed [&>p]:text-pretty">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:text-[3.6em] first-letter:leading-[0.78] first-letter:font-medium first-letter:text-forest">
          Every course has one story that never gets told the same way twice.
          Ours happened on the back nine, right at that hour when the light goes
          long and the beverage cart has given up on you. Something came out of
          the tree line and crossed the fairway at a full run. Low, quick, and
          gone before anyone thought to reach for a phone.
        </p>
        <p>
          Ask around the clubhouse and you won&rsquo;t hear the same account
          twice. A fox, probably. Maybe a coyote. One member insists it was a
          deer, which would be easier to believe if he hadn&rsquo;t also
          insisted he shot 79 that day. The only part everyone agrees on is that
          it happened, and that it was worth talking about.
        </p>
        <p>
          That&rsquo;s more or less the whole idea here. Golf gives you the
          stories. Whiskey gives them room to grow. We make the stuff you wear
          while telling them.
        </p>
        <p>
          The first run of gear is coming together now, along with some artwork
          we&rsquo;re excited about. Check back soon. Or don&rsquo;t, and just
          tell people you were here early. We&rsquo;ll back you up.
        </p>
      </div>

      <div className="reveal mt-12 h-px w-12 bg-gold" aria-hidden="true" />

      <p className="reveal mt-12 font-serif text-xl text-forest italic sm:text-2xl">
        Coming soon.
      </p>

      <footer className="reveal mt-20 text-xs tracking-widest-plus text-charcoal/40 uppercase">
        &copy; {new Date().getFullYear()} Neat Lie
      </footer>
    </main>
  );
}
