"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validation";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: LeadInput) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            {...register("name")}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#991b1b]"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            {...register("email")}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#991b1b]"
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#991b1b]"
            placeholder="Optional"
          />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Company</label>
          <input
            {...register("company")}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#991b1b]"
            placeholder="Optional"
          />
          {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Service Needed</label>
          <input
            {...register("service")}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#991b1b]"
            placeholder="Website redesign, landing page, brand site, etc."
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            {...register("message")}
            rows={6}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#991b1b]"
            placeholder="Tell us about your project"
          />
          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
        </div>

        {/* honeypot */}
        <input
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
      </div>

      <button
        disabled={loading}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#991b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {success && (
        <p className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
          Thanks. Your enquiry was sent successfully.
        </p>
      )}

      {error && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}