import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const supabase = createServerComponentSupabaseClient({ headers, cookies });
  const info = await supabase.auth.getUser();
  const { data: students } = await supabase.from("students").select();
  return (
    <div>
      <div className="m-10">WHAT"S up, slappers</div>
      <Link href="/home" className="w-30 h-15 bg-slate-400 rounded p-4 ">
        Login Page
      </Link>
    </div>
  );
}
