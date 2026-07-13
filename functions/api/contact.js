import { Resend } from 'resend';

export async function onRequestPost(context) {
    // Pobieramy klucz ze zmiennych środowiskowych zdefiniowanych na Cloudflare lub w pliku .dev.vars
    const resend = new Resend(context.env.RESEND_API_KEY);
    
    try {
        const formData = await context.request.formData();
        const name = formData.get('name') || 'Nie podano';
        const email = formData.get('email') || 'Nie podano';
        const message = formData.get('message') || 'Brak treści';

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'alapolacca@gmail.com',
            reply_to: email,
            subject: `Nowa wiadomość ze strony: ${name}`,
            html: `
                <h2>Nowa wiadomość (contact.exe)</h2>
                <p><strong>Obywatel / Firma:</strong> ${name}</p>
                <p><strong>Adres e-mail:</strong> ${email}</p>
                <p><strong>Treść depeszy:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            `
        });

        if (error) {
            return Response.json({ error }, { status: 400 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
