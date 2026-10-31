"use client"

import { useActionState } from "react"
import { submitEnquiry, type EnquiryState } from "@/app/actions"

const initialState: EnquiryState = { status: "idle" }

const enquiryTypes = [
  { value: "Clinical services", label: "Clinical services" },
  { value: "Organisational enquiry", label: "Organisational enquiry" },
  { value: "General enquiry", label: "General enquiry" },
]

const inputClasses =
  "font-instrument w-full rounded-xl border border-line bg-white px-4 py-3 text-base leading-6 text-heading placeholder:text-primary-muted focus:border-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

const labelClasses =
  "font-instrument font-medium block text-sm leading-5 text-foreground"

const errorClasses = "font-instrument mt-1.5 text-sm leading-5 text-[#a04b3c]"

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className={errorClasses}>{message}</p>
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState)

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-white px-8 py-12 text-center sm:px-12"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e4efdf] text-2xl text-primary"
        >
          ✓
        </span>
        <h3 className="font-libre mt-6 text-2xl leading-8 text-heading">
          Enquiry received
        </h3>
        <p className="font-instrument mx-auto mt-3 max-w-[380px] text-base leading-[26px] text-muted-blue">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <fieldset className="min-w-0">
        <legend className={labelClasses}>Enquiry type</legend>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {enquiryTypes.map((type, index) => (
            <label key={type.value} className="cursor-pointer">
              <input
                type="radio"
                name="enquiryType"
                value={type.value}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="font-instrument inline-block rounded-full border border-line px-4 py-2 text-sm leading-5 text-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-[#fbf8f1] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                {type.label}
              </span>
            </label>
          ))}
        </div>
        <FieldError message={state.fieldErrors?.enquiryType} />
      </fieldset>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={Boolean(state.fieldErrors?.name)}
            className={`mt-2 ${inputClasses}`}
          />
          <FieldError message={state.fieldErrors?.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            aria-required="true"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            className={`mt-2 ${inputClasses}`}
          />
          <FieldError message={state.fieldErrors?.email} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone number <span className="font-normal text-primary-muted">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+251 …"
            className={`mt-2 ${inputClasses}`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClasses}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={2000}
            aria-required="true"
            aria-invalid={Boolean(state.fieldErrors?.message)}
            placeholder="How can we help?"
            className={`mt-2 resize-y ${inputClasses}`}
          />
          <FieldError message={state.fieldErrors?.message} />
        </div>
      </div>

      <p className="font-instrument mt-6 rounded-xl bg-cream-light px-4 py-3 text-sm leading-6 text-foreground">
        <span aria-hidden="true" className="mr-2 text-primary" aria-label="Privacy note">
          ⓘ
        </span>
        Please don&apos;t include diagnoses, symptoms, medical histories or
        other sensitive health information in this form. If support is urgent,
        call us directly.
      </p>

      {state.status === "error" && state.message && !state.fieldErrors && (
        <p role="alert" className={errorClasses}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="font-figtree font-medium mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-primary px-8 text-lg leading-7 text-[#fbf8f1] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isPending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  )
}
