import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'; // Correct path to your font
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-blue-500 p-4 md:h-24">
        {/* You can add something in the header if you want */}
      </div>

      <div className="mt-8 flex-grow flex flex-col gap-8 md:flex-row md:items-center">
        <div className="md:w-1/2 px-6 py-10 md:px-12">
          <p
            className={`${lusitana.className} text-2xl text-gray-800 font-bold mb-4 md:text-4xl`}
          >
            MusiLearn
          </p>
          <p className="text-lg text-gray-600 md:text-xl">
            Votre plateforme de gestion de cours de musique. Simplifiez l'inscription, le suivi des progrès et la communication entre professeurs et élèves.
          </p>
          <div className="mt-6">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Se connecter</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/register"
              className="ml-4 inline-flex items-center gap-3 rounded-lg bg-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 md:text-base"
            >
              <span>S'inscrire</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/hero-image.jpg" // Make sure the path is correct
            alt="Image de MusiLearn"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority // Add priority for faster loading of hero image
          />
        </div>
      </div>
    </main>
  );
}