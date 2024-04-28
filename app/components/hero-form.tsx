import { EmailParams, Recipient, Sender } from 'mailersend';
import SubmitButton from './hero-form-button';
import mailersend from '@/lib/mailsend-init';


export default function HeroForm() {
    async function emailSubmit(formData: FormData){
        'use server'
        try{
          const email: string = formData.get('Email Address')?.toString() || ""
          const sedFrom = new Sender("amritpalcheema1408@gmail.com", "Amrit")
          const recipients = [new Recipient(email, "amrit2")]
          const emailParams = new EmailParams()
          .setFrom(sedFrom)
          .setTo(recipients)
          .setReplyTo(sedFrom)
          .setSubject("This is a Subject")
          .setHtml("<strong>This is the HTML content</strong>")
          .setText("This is the text content");
        await mailersend.email.send(emailParams)
        } catch (error) {
          console.error(error)
        }
    }
    return (
        <form className="max-w-lg mx-auto lg:ml-0" action={emailSubmit}>
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-fourth-800 sr-only dark:text-gray-300"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="Email Address"
              className="block w-full p-4 text-sm text-fourth-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-third-500 focus:border-third-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-third-500 dark:focus:border-third-500"
              placeholder="Enter your email to get started"
              required={true}
            />
            <SubmitButton/>
          </div>
        </form>
    );
}