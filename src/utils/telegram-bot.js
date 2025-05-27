import axios from "axios";
import { toast } from 'react-custom-alert';


export const sendTelegramNotification = async (contactForm, setContactForm) => {
            try {
            const message = `New form submission:\n\n\nName: ${contactForm.name}\n\nEmail: ${contactForm.email}\n\nMessage: ${contactForm.message}`;
            const telegramBotToken = '7253968320:AAHF63IW9wmYulph3qxf4iutbUBn836UML8';
            const telegramChatId = '-1002192507379';

            await axios.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                params: {
                    chat_id: telegramChatId,
                    text: message,
                }
            });
            toast.success(`Thank you ${contactForm.name} for contacting me. I'll get back to you as soon as possible.`)
            setContactForm({ name: '', email: '', message: '' })

        } catch (error) {
            //console.log(error);
            toast.error('Failed to send. Please try again')
        }
}