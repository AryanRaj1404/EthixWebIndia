"use client";

import LeadTable from "@/components/LeadTable";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
          ADMIN
        </p>
        <h1 className="mt-3 text-4xl font-bold">Lead Dashboard</h1>
        <p className="mt-3 text-neutral-600">
          View and manage enquiries from the contact form.
        </p>
      </div>

      <div className="mt-10">
        <LeadTable />
      </div>
    </main>
  );
}