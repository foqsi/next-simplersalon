import { FadeIn } from '@/components/animations';

interface Props {
  form: {
    name: string;
    email: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RequestDemoFormSection({ form, onChange, onSubmit }: Props) {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
      <FadeIn delay={0.2}>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl px-6 py-8 h-full flex flex-col">
          <div className="flex mb-4">
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
              What&apos;s Included
            </span>
          </div>
          <h3 className="text-xl font-bold mb-4">Experience a <strong>LIVE</strong> demo!</h3>
          <p className='text-sm mb-4'>Use a custom user interface to:</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
            <li>Edit content on pages</li>
            <li>Upload/delete images to a gallery</li>
            <li>Add, remove, edit content on services page</li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn>
        <form
          onSubmit={onSubmit}
          className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl px-4 sm:px-6 py-6 space-y-6 h-full"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-sm text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={onChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-sm text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={onChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-sm text-white">
              Message (optional)
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={form.message}
              onChange={onChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition font-semibold"
          >
            Send Request
          </button>
        </form>
      </FadeIn>
    </div>
  );
}
