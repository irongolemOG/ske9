"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-skeRed uppercase mb-4">Connect With Experts</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Discuss Your Chemical Requirements</h3>
            <p className="text-gray-600 text-lg mb-12 max-w-xl leading-relaxed font-medium">
              Our technical experts are ready to assist you with deep product knowledge, application support, and tailored supply chain solutions.
            </p>

            <div className="space-y-8">
              {[
                { icon: <MapPin size={24} />, title: "Corporate Office", text: "5-9-225, 3rd Floor, Sanali Estate, Chirag Ali Lane, Abids, Hyderabad \u2013 500001" },
                { icon: <Phone size={24} />, title: "Contact Number", text: "+91 97015 52221" },
                { icon: <Mail size={24} />, title: "Email Address", text: "kartikeya999@yahoo.com" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-skeRed border border-gray-100 group-hover:bg-skeRed group-hover:text-white group-hover:border-skeRed group-hover:shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-bold mb-1">{item.title}</h5>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-1 rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="bg-slate-50 rounded-[1.4rem] p-8 md:p-12 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-skeBlue/5 rounded-full blur-[100px] pointer-events-none" />
              
              <h4 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Send us a Message</h4>
              
              <form 
                className="relative z-10 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  window.location.href = `mailto:kartikeya999@yahoo.com?subject=Inquiry from ${name} - ${subject}&body=${message}`;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <input name="name" required type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-skeBlue focus:ring-1 focus:ring-skeBlue transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-skeBlue focus:ring-1 focus:ring-skeBlue transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject / Industry</label>
                  <input name="subject" required type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-skeBlue focus:ring-1 focus:ring-skeBlue transition-all" placeholder="Inquiry about Paint Additives" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-skeBlue focus:ring-1 focus:ring-skeBlue transition-all resize-none" placeholder="How can we assist you?"></textarea>
                </div>

                <button type="submit" className="w-full p-4 bg-skeRed hover:bg-skeRed/90 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-skeRed/30 hover:shadow-lg hover:shadow-skeRed/40">
                  <Send size={20} /> Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
