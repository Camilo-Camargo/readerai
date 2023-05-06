export async function POST(req: Request) {
  const form = await req.formData() as any; 
  console.log(form);
  const file = await form.get('book') as File;
  return new Response("program");
}
