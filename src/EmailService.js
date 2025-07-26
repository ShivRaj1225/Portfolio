import emailjs from "@emailjs/browser";

/**
 * Sends an email using EmailJS form service.
 * @param {object} formRef - React ref of the form element.
 * @returns {Promise<object>} Result status and response or error.
 */
export const sendEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};