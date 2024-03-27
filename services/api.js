import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://xemogvmwfoakhciwdzeh.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlbW9ndm13Zm9ha2hjaXdkemVoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTQ1NjY4MCwiZXhwIjoyMDI3MDMyNjgwfQ.JD4t9A90DhwMfXEEjtEyX4OHxpYgfJcphLyOJKP_FYU',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlbW9ndm13Zm9ha2hjaXdkemVoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTQ1NjY4MCwiZXhwIjoyMDI3MDMyNjgwfQ.JD4t9A90DhwMfXEEjtEyX4OHxpYgfJcphLyOJKP_FYU',
  },
});
