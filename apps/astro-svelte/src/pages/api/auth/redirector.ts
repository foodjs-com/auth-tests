import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, request, redirect }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `http://localhost:4322/api/auth/callback`
        },
    });

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect(data.url);


};