"use client";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Contact Us" subtitle="For project inquiries, partnership opportunities or general information — we’d like to hear from you." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          <div>
            <h2 className="text-[16px] font-semibold text-[#0F1B2B]">Get in Touch</h2>
            <dl className="mt-4 space-y-4 text-[14px]">
              <div><dt className="text-[11px] font-semibold tracking-[0.08em] text-[#5B6774]">REGISTERED OFFICE</dt><dd className="mt-1 text-[#0F1B2B]">Madhya Pradesh, India<br /><span className="text-[#5B6774]">Full address to be updated.</span></dd></div>
              <div><dt className="text-[11px] font-semibold tracking-[0.08em] text-[#5B6774]">EMAIL</dt><dd className="mt-1 font-medium text-[#0F1B2B]">contact@thapakpower.com</dd></div>
              <div><dt className="text-[11px] font-semibold tracking-[0.08em] text-[#5B6774]">PHONE</dt><dd className="mt-1 text-[#0F1B2B]">+91 — to be updated</dd></div>
            </dl>
            <p className="mt-6 rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-4 text-[12px] leading-[1.5] text-[#5B6774]">For government/statutory correspondence, project partnership or general inquiries — use the form and select the appropriate inquiry type for routing.</p>
          </div>

          <div className="rounded-[4px] border border-[#DCE1E6] bg-white p-6 lg:p-7">
            {sent ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2E7D51]/10 text-[#2E7D51]">✓</div>
                <p className="mt-4 text-[18px] font-semibold text-[#0F1B2B]">Message sent.</p>
                <p className="mt-2 text-[14px] text-[#5B6774]">Thank you — our team will respond as soon as possible.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-[13px] font-semibold text-[#3E6B8A] hover:text-[#0F1B2B]">Send another message</button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Full Name *</span>
                    <input required placeholder="Your name" className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] px-3 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Email Address *</span>
                    <input required type="email" placeholder="you@company.com" className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] px-3 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Organization / Company</span>
                  <input placeholder="Company name (optional)" className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] px-3 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Inquiry Type *</span>
                  <select required className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] bg-white px-3 text-[14px] outline-none focus:border-[#D98E1F]">
                    <option value="">Select a type</option>
                    <option>General Inquiry</option>
                    <option>Government &amp; Statutory</option>
                    <option>Investment &amp; Partnership</option>
                    <option>Technology &amp; Licensing</option>
                    <option>Media</option>
                    <option>Careers</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Message *</span>
                  <textarea required minLength={20} rows={4} placeholder="How can we help? (min 20 characters)" className="mt-1.5 w-full rounded-[4px] border border-[#DCE1E6] px-3 py-2.5 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
                </label>
                <label className="flex items-start gap-2 text-[12px] text-[#5B6774]">
                  <input type="checkbox" required className="mt-0.5" /> I agree to Thapak Power&apos;s Privacy Policy *
                </label>
                <button type="submit" className="inline-flex h-11 items-center rounded-[4px] bg-[#D98E1F] px-7 text-[14px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </Section>
      <Section surface className="!py-8">
        <div className="flex h-[200px] items-center justify-center rounded-[4px] border border-[#DCE1E6] bg-white">
          <span className="text-[12px] tracking-[0.06em] text-[#5B6774]">MAP — REGISTERED OFFICE LOCATION TO BE UPDATED</span>
        </div>
      </Section>
    </>
  );
}
