import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "khatttabyara@gmail.com",
    icon: "fa-solid fa-envelope",
    copyable: true,
  },
  {
    label: "Phone",
    value: "+201067012995 ",
    icon: "fa-solid fa-phone",
    copyable: true,
  },
  {
    label: "Location",
    value: "Damanhur, Egypt",
    icon: "fa-solid fa-location-dot",
    copyable: false,
  },
];

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleCopy = async (value, label) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = value;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setCopiedField(label);
    setTimeout(() => setCopiedField(null),2000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:khatttabyara@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className=" bg-slate-900 py-5 px-6 md:px-10">
      <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <p className="text-cyan-400 lg:text-lg text-xs tracking-widest">GET IN TOUCH</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Let's <span className="text-cyan-400">Connect</span>
        </h1>
        <div className="flex gap-6 flex-wrap lg:py-12">
          <div className="flex-1 min-w-[220px] flex flex-col gap-3 lg:gap-6">
            <p className="text-slate-400 md:text-lg text-sm lg:-mb-3 max-w-md leading-relaxed">
            Got a project in mind? Frontend, backend, or full-stack let's bring it to life!
            </p>
            {contactInfo.map((item) => (
              <div  key={item.label}
                className="border border-cyan-800/50 rounded-xl px-4 lg:py-6 py-5 bg-slate-800/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className={`${item.icon} text-cyan-400 lg:text-[20px]`} />
                  <div>
                    <p className="lg:text-[18px] text-[10px] text-slate-400">{item.label}</p>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer"
                       className="text-xs text-white hover:text-cyan-300 transition">
                        {item.value}
                      </a>
                       ) : (
                      <p className="lg:text-[17px] text-xs text-white mt-1">{item.value}</p>
                    )}
                  </div>
                </div>

                {item.copyable && (
                  <button onClick={() => handleCopy(item.value, item.label)} className="text-slate-400 hover:text-cyan-400 transition"
                    aria-label={`Copy ${item.label}`} >
                    <i className={`fa-solid ${
                        copiedField === item.label ? "fa-check text-cyan-400" : "fa-copy"
                      } text-sm lg:text-lg`}/>
                  </button>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}
            className="flex-[1.2] min-w-[240px] border border-cyan-800/50 rounded-xl py-7 px-4 bg-slate-800/40 flex flex-col gap-2 lg:gap-5">
            <input type="text"  name="name" placeholder="Your name" value={formData.name} onChange={handleChange}
             required className="bg-slate-900 border border-slate-800 rounded-lg p-3 lg:text-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"/>
            <input type="email" name="email"  placeholder="Your email" value={formData.email} onChange={handleChange}
             required className="bg-slate-900 border border-slate-800 rounded-lg p-3 lg:text-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"/>
            <textarea name="message" placeholder="Your message" rows="3" value={formData.message} onChange={handleChange}
             required className="bg-slate-900 border border-slate-800 rounded-lg p-3 lg:text-lg text-xs text-white placeholder-slate-500 resize-none font-sans focus:outline-none focus:border-cyan-400 transition"/>
            <button type="submit"
              className="bg-cyan-400 text-white font-semibold lg:text-lg text-xs rounded-lg py-2.5 hover:bg-cyan-300 transition mt-3 lg:mt-5">
              <i className="fa-solid fa-paper-plane lg:text-lg text-sm lg:me-2 me-1" />Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;