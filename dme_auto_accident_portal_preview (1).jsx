export default function DMESitePreview() {
  const products = [
    {
      title: 'Lumbar Support Brace',
      desc: 'Semi-rigid stabilization support designed for post-traumatic lumbar conditions and mobility assistance.',
    },
    {
      title: 'Electrical Stimulation Unit',
      desc: 'Portable EMS/TENS therapy device designed for neuromuscular treatment support.',
    },
    {
      title: 'Hot & Cold Aqua Relief System',
      desc: 'Integrated thermal therapy recovery system for inflammation reduction and pain management.',
    },
    {
      title: 'Cervical Traction Device',
      desc: 'Home-use cervical decompression support system commonly utilized in rehabilitation programs.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Explorer Medical Supplies
            </h1>
            <p className="text-sm text-slate-500">
              Auto Accident Recovery Equipment Portal
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a className="transition hover:text-amber-600">Products</a>
            <a className="transition hover:text-amber-600">Insurance Intake</a>
            <a className="transition hover:text-amber-600">How It Works</a>
            <a className="transition hover:text-amber-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#10243d] via-[#16355b] to-[#0b1728] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-400 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-amber-400/30 bg-white/5 px-4 py-2 text-sm text-amber-200">
              Recovery Equipment Portal
            </div>

            <h2 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight">
              Recovery Equipment Delivered for Auto Accident Patients
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Submit your motor vehicle accident insurance information for review and request medically appropriate rehabilitation equipment shipped directly to your home.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-amber-500 px-7 py-4 text-sm font-semibold text-black transition hover:bg-amber-400">
                Start Intake
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur transition hover:bg-white/10">
                View Equipment
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-semibold">Insurance & Prescription Intake</h3>
              <p className="mt-2 text-sm text-slate-300">
                Complete the form below to request review for home recovery equipment. A physician prescription or referral may be uploaded or sent after submission.
              </p>

              <div className="mt-8 grid gap-4">
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Patient Full Name"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="Date of Birth"
                  />

                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="Phone Number"
                  />
                </div>

                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Patient Street Address"
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="City"
                  />

                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="State"
                  />

                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="ZIP Code"
                  />
                </div>

                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Auto Insurance Company"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="Claim Number"
                  />

                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="Date of Accident"
                  />
                </div>

                <select className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 outline-none">
                  <option>Select Requested Equipment</option>
                  <option>Lumbar Support Brace</option>
                  <option>Electrical Stimulation Unit</option>
                  <option>Hot & Cold Aqua Relief System</option>
                  <option>Cervical Traction Device</option>
                </select>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="Referring Physician Name"
                  />

                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                    placeholder="Physician Phone or Fax"
                  />
                </div>

                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Physician Practice / Clinic Name"
                />

                <div className="rounded-2xl border border-dashed border-amber-300/40 bg-white/5 p-5">
                  <label className="block text-sm font-semibold text-amber-100">
                    Upload Physician Script / Referral
                  </label>
                  <p className="mt-2 text-xs leading-6 text-slate-300">
                    Upload a prescription, referral, letter of medical necessity, or DME order from the treating physician.
                  </p>
                  <input
                    type="file"
                    className="mt-4 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-black"
                  />
                </div>

                <select className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 outline-none">
                  <option>Do you already have a physician prescription?</option>
                  <option>Yes, I am uploading it now</option>
                  <option>Yes, but I need to send it later</option>
                  <option>No, please contact my referring physician</option>
                </select>

                <textarea
                  rows={4}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Describe your injuries or symptoms"
                ></textarea>

                <button className="mt-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Submit For Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-[2px] w-20 bg-amber-500"></div>
          <h3 className="text-4xl font-semibold tracking-tight">
            Recovery Equipment
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Premium rehabilitation equipment designed to support recovery following motor vehicle injuries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                +
              </div>

              <h4 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

              <button className="mt-8 text-sm font-semibold text-amber-600 transition group-hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-3">
          {[
            {
              title: '1. Submit Intake',
              text: 'Enter your insurance and accident information through our secure patient intake portal.',
            },
            {
              title: '2. Verification Review',
              text: 'Our team reviews insurance details and physician documentation requirements.',
            },
            {
              title: '3. Equipment Shipment',
              text: 'Approved recovery equipment is shipped directly to the patient address provided.',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-10"
            >
              <div className="mb-5 h-[2px] w-14 bg-amber-500"></div>
              <h4 className="text-2xl font-semibold">{step.title}</h4>
              <p className="mt-5 leading-8 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0c1624] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h4 className="text-3xl font-semibold tracking-tight">
              Explorer Medical Supplies
            </h4>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Rehabilitation support equipment for motor vehicle accident recovery patients.
            </p>
          </div>

          <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Contact</p>
              <p className="mt-3">Philadelphia, Pennsylvania</p>
              <p className="mt-2">609-410-7234</p>
              <p className="mt-2">support@explorermedicalsupplies.com</p>
            </div>

            <div>
              <p className="font-semibold text-white">Compliance Notice</p>
              <p className="mt-3 leading-7 text-slate-400">
                Equipment requests are subject to medical review, insurance verification, and prescribing requirements where applicable.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
