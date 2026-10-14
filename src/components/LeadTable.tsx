"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  message: string;
  status: string;
  createdAt: string;
};

export default function LeadTable() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadLeads() {
    const res = await fetch("/api/admin/leads", {
      cache: "no-store",
    });

    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }

    const data = await res.json();
    if (res.ok) {
      setLeads(data.leads || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    loadLeads();
  }

  async function deleteLead(id: string) {
    await fetch(`/api/admin/leads/${id}`, {
      method: "DELETE",
    });
    loadLeads();
  }

  if (loading) {
    return <p className="text-sm text-neutral-600">Loading leads...</p>;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-black/5">
        <thead className="bg-black/5 text-left text-sm">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Service</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 text-sm">
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="px-4 py-3 font-medium">{lead.name}</td>
              <td className="px-4 py-3">{lead.email}</td>
              <td className="px-4 py-3">{lead.service || "-"}</td>
              <td className="px-4 py-3">
                <select
                  value={lead.status}
                  onChange={(e) => updateStatus(lead.id, e.target.value)}
                  className="rounded-lg border border-black/10 px-2 py-1"
                >
                  <option value="new">new</option>
                  <option value="contacted">contacted</option>
                  <option value="won">won</option>
                  <option value="lost">lost</option>
                </select>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => deleteLead(lead.id)}
                  className="rounded-full bg-black px-3 py-1 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {leads.length === 0 && (
        <div className="p-6 text-sm text-neutral-600">No leads yet.</div>
      )}
    </div>
  );
}