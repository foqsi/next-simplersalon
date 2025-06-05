import { FadeIn } from '@/components/animations';

export default function RequestDemoThankYou() {
  return (
    <div className="flex justify-center items-center w-full min-h-[40vh] md:min-h-[60vh] px-4">
      <FadeIn>
        <div className="flex flex-col items-center text-center text-blue-400 font-semibold text-xl bg-white/10 backdrop-blur-md p-6 rounded-xl space-y-6 w-full max-w-xl shadow-xl">
          <p>🎉 Thank you! We&apos;ll reach out to schedule your demo soon.</p>
          <a
            href="https://demo.simplersalon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition text-sm font-medium"
          >
            View Demo Site
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
