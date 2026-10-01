const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretkey = process.env.SUPABASE_SECRET_KEY;

const supabaseAdmin = createClient(
    supabaseUrl,
    supabaseSecretkey
);

module.exports = supabaseAdmin;
