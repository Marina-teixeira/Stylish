import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wxncxbhdulzvtvxxtdgd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bmN4YmhkdWx6dnR2eHh0ZGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NTE5NDksImV4cCI6MjA5MjAyNzk0OX0.8IiBNzZqa2egybOX4yx2o8lZKpdKHFtVCmA6DsrX5JE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);