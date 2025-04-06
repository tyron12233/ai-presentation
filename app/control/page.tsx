"use client";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, ArrowRight } from "lucide-react";

async function getCurrentSlide() {
  const { data, error } = await supabase
    .from("public_data")
    .select("current_slide")
    .eq("id", 1)
    .single();
  if (error) {
    console.error("Error fetching current slide:", error);
    return null;
  }
  return data.current_slide;
}
async function incrementSlide() {
  const currentSlide = await getCurrentSlide();
  if (currentSlide === null) return;

  const newSlide = currentSlide + 1;
  const { error } = await supabase
    .from("public_data")
    .update({ current_slide: newSlide })
    .eq("id", 1);
  if (error) {
    console.error("Error updating slide:", error);
  }
}

async function decrementSlide() {
  const currentSlide = await getCurrentSlide();
  if (currentSlide === null) return;

  if (currentSlide - 1 < 0) {
    return;
  }

  const newSlide = currentSlide - 1;
  const { error } = await supabase
    .from("public_data")
    .update({ current_slide: newSlide })
    .eq("id", 1);
  if (error) {
    console.error("Error updating slide:", error);
  }
}
export default function ControlPage() {
  const previousSlide = () => {
    decrementSlide();
  };

  const nextSlide = () => {
    incrementSlide();
  };
  return (
    <div className="h-[100dvh] px-8 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div
        onClick={previousSlide}
        className="cursor-pointer h-full w-full mt-8 px-3 py-1 text-sm rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center"
      >
        <ArrowLeft className="w-10 h-10" />
      </div>
      <div
        onClick={nextSlide}
        className="cursor-pointer h-full w-full mb-8 px-3 py-1 text-sm rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center"
      >
        <ArrowRight className="w-10 h-10" />
      </div>
    </div>
  );
}
