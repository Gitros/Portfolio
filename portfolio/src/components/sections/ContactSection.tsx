"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import { contact } from "@/data/contact";
import {
  Mail,
  MapPin,
  Share2,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
} from "lucide-react";

type Locale = "pl" | "en";

const t = {
  title: { pl: "Kontakt", en: "Contact" },
  subtitle: {
    pl: "Masz projekt lub pytanie? Napisz do mnie!",
    en: "Have a project or question? Message me!",
  },
  left: {
    email: { pl: "Email", en: "Email" },
    location: { pl: "Lokalizacja", en: "Location" },
    socials: { pl: "Social Media", en: "Social Media" },
    github: { pl: "GitHub", en: "GitHub" },
    linkedin: { pl: "LinkedIn", en: "LinkedIn" },
    responseTime: { pl: "Czas odpowiedzi", en: "Response time" },
    engagement: { pl: "Zaangażowanie", en: "Engagement" },
  },
  form: {
    title: { pl: "Wyślij wiadomość", en: "Send a message" },
    name: { pl: "Imię i nazwisko", en: "Name" },
    email: { pl: "Email", en: "Email" },
    msg: { pl: "Wiadomość", en: "Message" },
    namePh: { pl: "Jan Kowalski", en: "John Doe" },
    emailPh: { pl: "jan@example.com", en: "john@example.com" },
    msgPh: {
      pl: "...",
      en: "...",
    },
    send: { pl: "Wyślij wiadomość", en: "Send message" },
    hint: {
      pl: "Odpowiem najszybciej jak to możliwe!",
      en: "I’ll reply as soon as I can!",
    },
  },
};

export default function ContactSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const subject =
      locale === "pl" ? "Kontakt z portfolio" : "Portfolio contact";
    const body =
      locale === "pl"
        ? "Cześć Jakub,\n\nPiszę w sprawie...\n"
        : "Hi Jakub,\n\nI'm reaching out about...\n";
    return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [locale]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const from = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");

    const subject =
      locale === "pl" ? `Portfolio: ${name}` : `Portfolio: ${name}`;
    const body =
      locale === "pl"
        ? `Imię i nazwisko: ${name}\nEmail: ${from}\n\nWiadomość:\n${message}\n`
        : `Name: ${name}\nEmail: ${from}\n\nMessage:\n${message}\n`;

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {t.title[locale]}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {t.subtitle[locale]}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* LEFT */}
          <div className="grid gap-6">
            {/* Email card */}
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title={t.left.email[locale]}
              subtitle={contact.email}
              right={
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied
                    ? locale === "pl"
                      ? "Skopiowano"
                      : "Copied"
                    : locale === "pl"
                      ? "Kopiuj"
                      : "Copy"}
                </button>
              }
            />

            {/* Location card */}
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title={t.left.location[locale]}
              subtitle={contact.location[locale]}
            />

            {/* Socials card */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 shadow-sm dark:border-indigo-400/20 dark:bg-indigo-500/10">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm dark:bg-slate-900">
                  <Share2 className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
                </div>
                <div className="w-full">
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {t.left.socials[locale]}
                  </div>

                  <div className="mt-4 grid gap-3">
                    <SocialRow
                      icon={<Github className="h-5 w-5" />}
                      label={t.left.github[locale]}
                      handle={contact.githubHandle}
                      href={contact.githubUrl}
                    />
                    <SocialRow
                      icon={<Linkedin className="h-5 w-5" />}
                      label={t.left.linkedin[locale]}
                      handle={contact.linkedinHandle}
                      href={contact.linkedinUrl}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                value={contact.responseTime[locale]}
                label={t.left.responseTime[locale]}
              />
              <StatCard
                value={contact.engagement[locale]}
                label={t.left.engagement[locale]}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
              {t.form.title[locale]}
            </div>

            <form onSubmit={onSubmit} className="mt-6 grid gap-5">
              <Field
                label={t.form.name[locale]}
                name="name"
                placeholder={t.form.namePh[locale]}
                type="text"
                required
              />
              <Field
                label={t.form.email[locale]}
                name="email"
                placeholder={t.form.emailPh[locale]}
                type="email"
                required
              />
              <TextArea
                label={t.form.msg[locale]}
                name="message"
                placeholder={t.form.msgPh[locale]}
                required
              />

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-indigo-700 active:scale-[0.99] dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <Send className="h-4 w-4" />
                {t.form.send[locale]}
              </button>

              <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                {t.form.hint[locale]}
              </div>

              <a
                href={mailto}
                className="text-center text-sm font-semibold text-indigo-700 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
              >
                {locale === "pl"
                  ? "Otwórz klienta poczty z gotowym szablonem →"
                  : "Open email client with template →"}
              </a>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  subtitle,
  right,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
            {icon}
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {title}
            </div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {subtitle}
            </div>
          </div>
        </div>
        {right}
      </div>
    </div>
  );
}

function SocialRow({
  icon,
  label,
  handle,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  handle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-400/60"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
          {icon}
        </div>
        <div>
          <div className="font-bold text-slate-900 dark:text-slate-100">
            {label}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {handle}
          </div>
        </div>
      </div>

      <div className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
        <span className="text-sm font-semibold">{localeLabel("→")}</span>
      </div>
    </a>
  );
}

// tiny helper so TSX doesn’t complain in SocialRow
function localeLabel(s: string) {
  return s;
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-indigo-50/40 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-indigo-500/10">
      <div className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300">
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {label}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 shadow-sm outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200/60 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
        {label}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={6}
        className="min-h-[160px] resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200/60 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
      />
    </label>
  );
}
