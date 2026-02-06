# Feature: Notification System

## Overview
Auto-reply to reservation submissions via email (Phase 1) and SMS (Phase 2).

## Phase 1: Email Notifications

### Provider Options
| Provider | Pros | Cons |
|----------|------|------|
| **Resend** | Simple API, great DX, React Email templates | US-focused |
| **Brevo** | French company, email + SMS in one, free tier | Slightly more complex API |
| **Postmark** | Excellent deliverability, transactional focus | Pricier |

**Recommendation**: Brevo — French company (Sendinblue), does both email and SMS, GDPR-friendly, good free tier (300 emails/day).

### Email Templates (using React Email or Brevo templates)

#### 1. Customer Confirmation
- **Trigger**: New reservation saved
- **To**: Customer email
- **Subject**: "Votre réservation au Café du Marché ✓"
- **Content**:
  ```
  Bonjour [name],

  Nous avons bien reçu votre demande de réservation :

  📅 Date : [date]
  🕐 Heure : [time]
  👥 Nombre de personnes : [guests]

  Nous vous confirmerons votre réservation dans les plus brefs délais.

  Besoin de modifier ? Appelez-nous au [phone].

  À très bientôt,
  Paul & Matthias
  Le Café du Marché
  [address]
  ```

#### 2. Restaurant Notification
- **Trigger**: New reservation saved
- **To**: Paul & Matthias's email
- **Subject**: "Nouvelle réservation — [name] — [date] [time]"
- **Content**: Full reservation details + link to admin panel

#### 3. Status Update (when confirmed/cancelled from admin)
- **Trigger**: Reservation status changed in Payload
- **To**: Customer email
- **Subject**: "Réservation confirmée — Café du Marché" (or "annulée")
- **Content**: Updated status + details

### Implementation
```typescript
// Payload hook on Reservation collection
{
  hooks: {
    afterChange: [
      async ({ doc, previousDoc, operation }) => {
        if (operation === 'create') {
          await sendCustomerConfirmation(doc);
          await sendRestaurantNotification(doc);
        }
        if (operation === 'update' && doc.status !== previousDoc.status) {
          await sendStatusUpdate(doc);
        }
      }
    ]
  }
}
```

## Phase 2: SMS Notifications

### Provider: Brevo (if chosen for email) or Twilio

### SMS Templates

#### Customer Confirmation
```
Café du Marché : réservation reçue pour le [date] à [time] ([guests] pers.).
Confirmation à venir. À bientôt !
```

#### Restaurant Alert
```
Nouvelle résa : [name] - [date] [time] - [guests] pers.
Tel: [phone]
```

### Configuration
- SMS opt-in: implied by providing phone number in reservation form
- Include opt-out in confirmation: "Répondez STOP pour ne plus recevoir de SMS"
- GDPR compliant: mention in privacy policy
