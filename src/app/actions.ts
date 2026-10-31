"use server"

import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"

export type EnquiryState = {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: Record<string, string>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ENQUIRY_TYPES = ["Clinical services", "Organisational enquiry", "General enquiry"] as const

function validate(formData: FormData) {
  const fieldErrors: Record<string, string> = {}

  const enquiryType = String(formData.get("enquiryType") ?? "")
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!ENQUIRY_TYPES.includes(enquiryType as (typeof ENQUIRY_TYPES)[number])) {
    fieldErrors.enquiryType = "Please choose an enquiry type."
  }
  if (!name) fieldErrors.name = "Please enter your full name."
  if (!email) {
    fieldErrors.email = "Please enter your email address."
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "That email address doesn't look right."
  }
  if (!message) {
    fieldErrors.message = "Please write a short message."
  } else if (message.length > 2000) {
    fieldErrors.message = "Please keep your message under 2000 characters."
  }

  return { fieldErrors, values: { enquiryType, name, email, phone, message } }
}

async function persist(values: {
  enquiryType: string
  name: string
  email: string
  phone: string
  message: string
}) {
  const dir = path.join(process.cwd(), ".data")
  await mkdir(dir, { recursive: true })
  const record = JSON.stringify({ receivedAt: new Date().toISOString(), ...values })
  await appendFile(path.join(dir, "enquiries.jsonl"), record + "\n", "utf8")
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const { fieldErrors, values } = validate(formData)

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    }
  }

  try {
    await persist(values)
  } catch (error) {
    console.error("Failed to store enquiry:", error)
    return {
      status: "error",
      message:
        "Something went wrong on our side and your enquiry was not sent. Please try again, or email us directly at info@serenityethiopia.org.",
    }
  }

  return {
    status: "success",
    message:
      "Thank you — your enquiry has been received. We'll get back to you within two working days.",
  }
}
