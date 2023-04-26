import InputFile from './components/client/InputFile'

export default async function Home() {

  return (
    <main>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-6">
        <h1
          className="text-4xl font-bold"
        >Readerai</h1>
        <InputFile />
      </div>
    </main >
  )
}
