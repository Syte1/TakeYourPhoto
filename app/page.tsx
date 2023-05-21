import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentSupabaseClient({ headers, cookies });
  const info = await supabase.auth.getUser();
  const { data: students } = await supabase.from("students").select();
  return (
    <div>
      <pre>{JSON.stringify(info, null, 2)}</pre>
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </div>
  );
}
