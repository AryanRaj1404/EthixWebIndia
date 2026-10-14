import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Ethixweb India</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
              Premium websites, conversion-focused design, and practical digital
              systems for Indian businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-3 text-sm text-neutral-600">
              Available for web design, development, and business growth projects.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-black/5 pt-6 text-xs text-neutral-500">
            © 2026 Ethixweb India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}