import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <p className="mb-6 text-2xl font-bold text-center">Connect with me, I'd love to chat!!</p>
      <form className="flex flex-col items-center gap-4 w-full max-w-xs">
        <Input placeholder="Your Email" type="email" required />
        <Button className="bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 mt-2">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;
