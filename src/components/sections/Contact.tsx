import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-16" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
        <div className="mb-8 space-y-4 text-lg text-muted-foreground">
          <div><span className="font-semibold">Email</span><br />
            <a href="mailto:shenton.mathew@gmail.com" className="underline">shenton.mathew@gmail.com</a>
        </div>
          <div><span className="font-semibold">Location</span><br />
            United Kingdom
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;