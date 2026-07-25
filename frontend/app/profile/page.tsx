import { AvatarUpload } from "@/components/auth/avatar-upload";
import { ProfileCard } from "@/components/auth/profile-card";

export default function ProfilePage() {
  return (
    <main className="mx-auto grid min-h-screen max-w-5xl gap-6 px-4 py-12 lg:grid-cols-[340px_1fr]">
      <AvatarUpload />
      <ProfileCard
        name="Your profile"
        email="you@example.com"
        summary="Update your medical history, emergency contact, and wellness details to personalize HERmony."
      />
    </main>
  );
}