import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col fixed bottom-0 left-0 flex w-full justify-start bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <h1 className="font-serif text-3xl w-20 h-full">Mina Hussain</h1>
          <p className="font-sans">
            Frontend engineer and designer in the bay area
          </p>
          <p className="font-sans">
            Leading with curiosity at{' '}
            <a href="https://attnhussain.com/" className="font-bold">
              attnhussain
            </a>
          </p>
          <p className="font-sans">Operating on medium roast</p>
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
        <div className="flex justify-start items-start">
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
      </div>
    </main>
  )
}
