/* roadmap.js — entrada de roadmap.html (?trilha=dev).
   O CSS é ligado no HTML (<link>), então funciona com Live Server e com Vite. */
import { renderRoadmap } from "./ui/roadmap_ui.js";
import { initPersonalPlan } from "./ui/personal_plan.js";

const slug = new URLSearchParams(location.search).get("trilha");
renderRoadmap(document.querySelector("[data-roadmap]"), slug);
initPersonalPlan({ trailSlug: slug });
