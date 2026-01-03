import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();

/* =========================
   RATE LIMIT (ANTI-SPAM)
========================= */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: {
    success: false,
    error: "Too many requests. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   EMAIL TEMPLATE
========================= */
const generateEmailTemplate = (name, email, message) => `
  <div style="
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 600px;
    margin: 24px auto;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e4e4e7;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  ">
    <div style="background:#000;padding:28px;text-align:center;">
      <h2 style="margin:0;color:#fff;font-size:22px;">
        New Portfolio Message
      </h2>
    </div>

    <div style="padding:32px;background:#fff;">
      <p style="font-size:13px;color:#71717a;text-transform:uppercase;">
        Sender
      </p>

      <p style="margin:0;font-size:16px;">
        <strong>${name}</strong>
      </p>

      <p style="margin:6px 0 20px;">
        <a href="mailto:${email}" style="color:#2563eb;">
          ${email}
        </a>
      </p>

      <div style="height:1px;background:#f4f4f5;margin:24px 0;"></div>

      <p style="font-size:13px;color:#71717a;text-transform:uppercase;">
        Message
      </p>

      <div style="
        background:#f8fafc;
        padding:20px;
        border-radius:10px;
        border-left:4px solid #000;
      ">
        <p style="margin:0;line-height:1.6;white-space:pre-wrap;">
          ${message}
        </p>
      </div>
    </div>

    <div style="
      background:#f4f4f5;
      padding:14px;
      text-align:center;
      font-size:12px;
      color:#a1a1aa;
    ">
      Sent from portfolio contact form
    </div>
  </div>
`;

/* =========================
   CONTACT ENDPOINT
========================= */
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, message, website } = req.body;

  /* =========================
     HONEYPOT (BOT TRAP)
  ========================= */
  if (website) {
    // Silent success – bots think it worked
    return res.status(200).json({ success: true });
  }

  /* =========================
     VALIDATION
  ========================= */
  if (
    !name ||
    !email ||
    !message ||
    name.length > 100 ||
    email.length > 150 ||
    message.length > 2000
  ) {
    return res.status(400).json({
      success: false,
      error: "Invalid input",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: generateEmailTemplate(name, email, message),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({
      success: false,
      error: "Email could not be sent",
    });
  }
});
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}
/* =========================
   EXPORT (VERCEL)
========================= */
export default app;
