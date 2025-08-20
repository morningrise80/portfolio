import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to discussing new opportunities, collaborations, or
          just having a friendly chat. Feel free to reach out to me anytime —
          whether it’s about a project, work inquiry, or simply to connect.
        </p>

        {/* Icons row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <Mail className="text-primary h-8 w-8" />
            </div>
            <a className="text-muted-foreground hover:text-primary transition-colors">
              aslaniamirali81@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <Phone className="text-primary h-8 w-8" />
            </div>
            <a className="text-muted-foreground hover:text-primary transition-colors">
              +1 289-500-3694
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <MapPin className="text-primary h-8 w-8" />
            </div>
            <span className="text-muted-foreground hover:text-primary transition-colors">
              Toronto, ON
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
