import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-8">
      <div className="flex z-10 w-full items-start flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-col w-full lg:static lg:size-auto">
          <h1 className="font-serif text-2xl w-20 h-full">Mina Hussain</h1>
          <div className="text-sm font-sans">
            <p>Frontend engineer and designer in the bay area</p>
            <p>
              Leading with curiosity at{' '}
              <a href="https://attnhussain.com/" className="font-bold">
                attnhussain
              </a>
            </p>
            <p>Operating on medium roast</p>
          </div>
        </div>
        <div>
          <Image
            className="relative"
            src="/profile-photo-bw.png"
            alt="Profile Photo in black and white"
            width={150}
            height={150}
            style={{ borderRadius: 100 }}
            priority
          />
        </div>
      </div>

      <div className="relative flex overflow-x-hidden w-full">
        <div className="relative w-[491.83px] h-[240px] rounded-md overflow-hidden">
          <a href="https://github.com/minahussain/homage" target="_blank">
            <div className="absolute inset-0 bg-orange-800/50 w-full h-full z-10 hover:bg-orange-800/40 transition-colors ease-in delay-150" />
            <Image
              src="/homage-app.png"
              alt="Homage App Screenshot"
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>
        </div>
      </div>
    </main>
  )
}
