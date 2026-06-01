import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-4 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am actively seeking opportunities as a Frontend Developer and am
          excited to contribute to real-world projects. Whether you have a job
          opportunity, internship, freelance project, or would like to connect,
          feel free to reach out. I'm always eager to learn, collaborate, and
          grow as a developer.
        </p>

        <div className=" gap-12 flex flex-col items-center justify-center">
          <div className="space-y-8 items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-5xl justify-center items-center md:items-start p-6 bg-secondary/15 backdrop-blur-xs">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:anandhuuthaman6@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    anandhuuthaman6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+919072435793"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9072435793
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Location</h4>
                  <a
                    href="https://maps.google.com/?q=Punnamada,+Allepey,+Kerala,+688006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Punnamada, Allepey, Kerala, 688006
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
